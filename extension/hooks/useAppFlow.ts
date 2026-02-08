import { useCallback, useEffect, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import type { GuidanceResponse } from "../utils/gemini"
import { API_KEY_STORAGE_KEY, getApiKey, getAutoProgress } from "../utils/storage"
import { useGuidance } from "./useGuidance"
import { useSpeechRecognition } from "./useSpeechRecognition"

export const useAppFlow = () => {
  const [goal, setGoal] = useStorage<string>("userGoal", "")
  const [guidance, setGuidance] = useStorage<GuidanceResponse | null>(
    "currentGuidance",
    null
  )
  const [apiKey] = useStorage<string>(API_KEY_STORAGE_KEY)

  const autoProgress = true // Always enabled (smart polling)
  const [chatInput, setChatInput] = useState("")

  const hasKey = !!apiKey

  const {
    isLoading,
    handleGuideMe,
    speak,
    stopSpeaking,
    isPaused,
    togglePause,
    sendOverlaysToContent
  } = useGuidance({
    goal,
    onGuidanceUpdate: (data) => setGuidance(data),
    autoProgress
  })

    const { isListening, isPermissionDenied, toggleListening } = useSpeechRecognition({
        onResult: (transcript) => {
          if (guidance) {
            setChatInput(transcript)
          } else {
            setGoal(transcript)
          }
        },
        onError: (err) => console.error("Speech error", err)
      })
    
      const handleStartGuidance = useCallback(
        async (isUpdate: boolean, customPrompt?: string) => {
          if (!isUpdate) {
            setGuidance(null)
            await handleGuideMe(null, false)
          } else {
            await handleGuideMe(guidance, true, customPrompt)
            setChatInput("")
          }
        },
        [guidance, handleGuideMe, setGuidance]
      )
    
      const handleReset = useCallback(() => {
        stopSpeaking()
        setGoal("")
        setChatInput("")
        setGuidance(null)
      }, [setGoal, setGuidance, stopSpeaking])
    
      const openOptions = useCallback(() => {
        chrome.runtime.openOptionsPage()
      }, [])
    
      return {
        goal,
        setGoal,
        guidance,
        setGuidance,
        chatInput,
        setChatInput,
        hasKey,
        autoProgress,
        
        isLoading,
        isListening,
        isPermissionDenied, // Expose
        isPaused,
    
        handleStartGuidance,
        handleReset,
        openOptions,
        toggleListening,
        togglePause,
        speak,
        sendOverlaysToContent
      }
    }
