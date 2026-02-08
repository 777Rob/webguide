import { useCallback, useEffect, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import type { GuidanceResponse } from "../utils/gemini"
import { getApiKey, getAutoProgress } from "../utils/storage"
import { useGuidance } from "./useGuidance"
import { useSpeechRecognition } from "./useSpeechRecognition"

export const useAppFlow = () => {
  // --- State ---
  const [goal, setGoal] = useStorage<string>("userGoal", "")
  const [guidance, setGuidance] = useStorage<GuidanceResponse | null>(
    "currentGuidance",
    null
  )
  const [hasKey, setHasKey] = useState(false)
  const [autoProgress, setAutoProgress] = useState(false)
  const [chatInput, setChatInput] = useState("")

  // --- Initialization ---
  useEffect(() => {
    const init = async () => {
      const key = await getApiKey()
      setHasKey(!!key)
      const auto = await getAutoProgress()
      setAutoProgress(auto)
    }
    init()
  }, [])

  // --- Sub-hooks ---
  const { isLoading, handleGuideMe, speak, isPaused, togglePause } =
    useGuidance({
      goal,
      onGuidanceUpdate: (data) => setGuidance(data),
      autoProgress
    })

  const { isListening, toggleListening } = useSpeechRecognition({
    onResult: (transcript) => {
      if (guidance) {
        setChatInput(transcript)
      } else {
        setGoal(transcript)
      }
    },
    onError: (err) => console.error("Speech error", err)
  })

  // --- Handlers ---
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
    setGoal("")
    setChatInput("")
    setGuidance(null)
  }, [setGoal, setGuidance])

  const openOptions = useCallback(() => {
    chrome.runtime.openOptionsPage()
  }, [])

  return {
    // State
    goal,
    setGoal,
    guidance,
    setGuidance,
    chatInput,
    setChatInput,
    hasKey,
    autoProgress,
    
    // Status
    isLoading,
    isListening,
    isPaused,

    // Actions
    handleStartGuidance,
    handleReset,
    openOptions,
    toggleListening,
    togglePause,
    speak
  }
}
