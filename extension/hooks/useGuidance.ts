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
        const MAX_RETRIES = 5
        const RETRY_DELAY = 1000

        for (let i = 0; i < MAX_RETRIES; i++) {
            try {
                // Use lastFocusedWindow to target the actual browser window, not the side panel's context
                const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
                
                if (tab?.id) {
                    console.log(`WebGuide: Sending overlays to tab ${tab.id} (${tab.url})`)
                    // Check if we can message the tab
                    await chrome.tabs.sendMessage(tab.id, {
                        action: "SHOW_OVERLAYS",
                        suggestions
                    })
                    console.log("WebGuide: Overlays sent successfully")
                    return // Success
                }
            } catch (e: any) {
                const isLastAttempt = i === MAX_RETRIES - 1
                if (isLastAttempt) {
                    console.error("WebGuide: Failed to send overlays after retries", e)
                } else {
                    console.log(`WebGuide: Retrying overlay send (${i + 1}/${MAX_RETRIES})...`)
                    await new Promise(resolve => setTimeout(resolve, RETRY_DELAY))
                }
            }
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

    const [isPaused, setIsPaused] = useState(false)

    const togglePause = useCallback(() => {
        setIsPaused(prev => {
            const newState = !prev
            if (newState) {
                stopSpeaking()
                if (scheduledUpdateRef.current) {
                    clearTimeout(scheduledUpdateRef.current)
                    scheduledUpdateRef.current = null
                }
            } else {
                // Resumed - valid to restart check if needed, but let's wait for next event or manual trigger
            }
            return newState
        })
    }, [stopSpeaking])

    // Update autoProgress logic to respect isPaused
    useEffect(() => {
        // 1. Navigation Listener
        const handlePageChange = (request: any) => {
            if (request.action === "PAGE_CHANGED" && autoProgress && !isLoading && !isPaused) {
                const guidance = latestGuidanceRef.current
                if (guidance && !guidance.completed) {
                    console.log("WebGuide: Navigation detected, checking progress...")
                    handleGuideMe(guidance, true)
                }
            }
        }
        chrome.runtime.onMessage.addListener(handlePageChange)

        return () => chrome.runtime.onMessage.removeListener(handlePageChange)
    }, [autoProgress, isLoading, handleGuideMe, isPaused])

    useEffect(() => {
        // 2. 30-Second Timeout after completion
        if (autoProgress && !isLoading && !isPaused && latestGuidanceRef.current && !latestGuidanceRef.current.completed) {
            if (!scheduledUpdateRef.current) {
                console.log("WebGuide: Scheduling check in 30s")
                scheduledUpdateRef.current = setTimeout(() => {
                    console.log("WebGuide: 30s timeout reached, checking progress...")
                    handleGuideMe(latestGuidanceRef.current, true)
                    scheduledUpdateRef.current = null
                }, 30000)
            }
        } else {
            if (scheduledUpdateRef.current) {
                clearTimeout(scheduledUpdateRef.current)
                scheduledUpdateRef.current = null
            }
        }

        return () => {
            if (scheduledUpdateRef.current) {
                clearTimeout(scheduledUpdateRef.current)
                scheduledUpdateRef.current = null
            }
        }
    }, [autoProgress, isLoading, handleGuideMe, isPaused])

    return {
        isLoading,
        error,
        handleGuideMe,
        speak,
        stopSpeaking,
        isPaused,
        togglePause,
        sendOverlaysToContent
    }
}
