import { useState, useCallback, useEffect } from "react"
import type { GuidanceResponse } from "../utils/gemini"

interface UseGuidanceProps {
    goal: string
    onGuidanceUpdate?: (data: GuidanceResponse) => void
}

export const useGuidance = ({ goal, onGuidanceUpdate }: UseGuidanceProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Helper to send overlays to content script
    const sendOverlaysToContent = useCallback(async (suggestions: any[]) => {
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
            if (tab?.id) {
                chrome.tabs.sendMessage(tab.id, {
                    action: "SHOW_OVERLAYS",
                    suggestions
                })
            }
        } catch (e) {
            console.error("Failed to send overlays", e)
        }
    }, [])

    // Helper to speak text
    const speak = useCallback((text: string) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text)
            window.speechSynthesis.speak(utterance)
        }
    }, [])

    const handleGuideMe = useCallback(async (currentGuidance: GuidanceResponse | null, isUpdate = false) => {
        if (!goal.trim()) return

        setIsLoading(true)
        setError(null)

        // We don't clear guidance here immediately if it's an update, handled by caller or state

        try {
            const response = await chrome.runtime.sendMessage({
                action: "ANALYZE_PAGE",
                userGoal: goal,
                previousContext: isUpdate && currentGuidance ? currentGuidance.steps : null
            })

            if (response.error) {
                throw new Error(response.error)
            }

            const data = response.data as GuidanceResponse

            if (onGuidanceUpdate) {
                onGuidanceUpdate(data)
            }

            speak(data.spoken_guidance)
            sendOverlaysToContent(data.visual_suggestions)

        } catch (err: any) {
            console.error(err)
            setError(err.message || "Something went wrong")
            alert(err.message || "Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }, [goal, onGuidanceUpdate, speak, sendOverlaysToContent])

    return {
        isLoading,
        error,
        handleGuideMe,
        speak
    }
}
