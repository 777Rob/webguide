import { useState, useCallback, useEffect, useRef } from "react"
import type { GuidanceResponse } from "../utils/gemini"

interface UseGuidanceProps {
    goal: string
    onGuidanceUpdate?: (data: GuidanceResponse) => void
    autoProgress: boolean
}

export const useGuidance = ({ goal, onGuidanceUpdate, autoProgress }: UseGuidanceProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Ref to track if we are currently waiting for a scheduled update
    const scheduledUpdateRef = useRef<NodeJS.Timeout | null>(null)

    // Ref to access latest guidance in effects without dependency cycles
    const latestGuidanceRef = useRef<GuidanceResponse | null>(null)

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
            // Cancel any current speech first
            window.speechSynthesis.cancel()
            const utterance = new SpeechSynthesisUtterance(text)
            window.speechSynthesis.speak(utterance)
        }
    }, [])

    const stopSpeaking = useCallback(() => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel()
        }
    }, [])

    const handleGuideMe = useCallback(async (currentGuidance: GuidanceResponse | null, isUpdate = false, customPrompt?: string) => {
        const promptToUse = customPrompt || goal
        if (!promptToUse.trim()) return

        stopSpeaking() // Stop previous audio immediately
        setIsLoading(true)
        setError(null)

        // Clear any pending scheduled updates since we are starting one now
        if (scheduledUpdateRef.current) {
            clearTimeout(scheduledUpdateRef.current)
            scheduledUpdateRef.current = null
        }

        try {
            const response = await chrome.runtime.sendMessage({
                action: "ANALYZE_PAGE",
                userGoal: promptToUse,
                previousContext: isUpdate && currentGuidance ? currentGuidance : null
            })

            if (response.error) {
                throw new Error(response.error)
            }

            const data = response.data as GuidanceResponse
            latestGuidanceRef.current = data

            if (onGuidanceUpdate) {
                onGuidanceUpdate(data)
            }

            speak(data.spoken_guidance)
            sendOverlaysToContent(data.visual_suggestions)

        } catch (err: any) {
            console.error(err)
            setError(err.message || "Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }, [goal, onGuidanceUpdate, speak, stopSpeaking, sendOverlaysToContent])

    // --- Smart Auto-Progress Logic ---

    useEffect(() => {
        // 1. Navigation Listener
        const handlePageChange = (request: any) => {
            if (request.action === "PAGE_CHANGED" && autoProgress && !isLoading) {
                const guidance = latestGuidanceRef.current
                if (guidance && !guidance.completed) {
                    console.log("WebGuide: Navigation detected, checking progress...")
                    handleGuideMe(guidance, true)
                }
            }
        }
        chrome.runtime.onMessage.addListener(handlePageChange)

        return () => chrome.runtime.onMessage.removeListener(handlePageChange)
    }, [autoProgress, isLoading, handleGuideMe])

    useEffect(() => {
        // 2. 30-Second Timeout after completion
        // Only schedule if autoProgress is ON, we are NOT loading, and we have incomplete guidance
        if (autoProgress && !isLoading && latestGuidanceRef.current && !latestGuidanceRef.current.completed) {
            if (!scheduledUpdateRef.current) {
                console.log("WebGuide: Scheduling check in 30s")
                scheduledUpdateRef.current = setTimeout(() => {
                    console.log("WebGuide: 30s timeout reached, checking progress...")
                    handleGuideMe(latestGuidanceRef.current, true)
                    scheduledUpdateRef.current = null
                }, 30000)
            }
        } else {
            // If conditions change (e.g. user turned off auto-progress), clear schedule
            if (scheduledUpdateRef.current) {
                clearTimeout(scheduledUpdateRef.current)
                scheduledUpdateRef.current = null
            }
        }

        // Cleanup on unmount or deps change
        return () => {
            if (scheduledUpdateRef.current) {
                clearTimeout(scheduledUpdateRef.current)
                scheduledUpdateRef.current = null
            }
        }
    }, [autoProgress, isLoading, handleGuideMe]) // latestGuidanceRef is stable

    return {
        isLoading,
        error,
        handleGuideMe,
        speak,
        stopSpeaking
    }
}
