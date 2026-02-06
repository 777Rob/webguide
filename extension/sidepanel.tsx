import { useState, useEffect } from "react"
import { Settings } from "lucide-react"
import { Box, Button, IconButton, Typography } from "@mui/material"
import { useStorage } from "@plasmohq/storage/hook"

import { getApiKey, getAutoProgress } from "./utils/storage"
import type { GuidanceResponse } from "./utils/gemini"

import { useSpeechRecognition } from "./hooks/useSpeechRecognition"
import { useGuidance } from "./hooks/useGuidance"

import { WelcomeView } from "./components/WelcomeView"
import { GoalInput } from "./components/GoalInput"
import { ResponseDisplay } from "./components/ResponseDisplay"

function SidePanel() {
  const [goal, setGoal] = useStorage<string>("userGoal", "")
  const [hasKey, setHasKey] = useState(false)
  const [autoProgress, setAutoProgress] = useState(false)

  // Storage hook for guidance persistence
  const [guidance, setGuidance] = useStorage<GuidanceResponse | null>("currentGuidance", null)

  // Verify API Key on mount
  useEffect(() => {
    const init = async () => {
      const key = await getApiKey()
      setHasKey(!!key)
      const auto = await getAutoProgress()
      setAutoProgress(auto)
    }
    init()
  }, [])

  // Custom Hooks
  const {
    isListening,
    toggleListening
  } = useSpeechRecognition({
    onResult: (transcript) => setGoal(transcript),
    onError: (err) => console.error("Speech error", err)
  })

  const {
    isLoading,
    handleGuideMe,
    speak
  } = useGuidance({
    goal,
    onGuidanceUpdate: (data) => setGuidance(data)
  })

  // Auto-progress polling
  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (autoProgress && guidance && !guidance.completed && !isLoading) {
      intervalId = setInterval(() => {
        console.log("Auto-checking progress...")
        handleGuideMe(guidance, true)
      }, 10000) // 10 seconds
    }

    return () => clearInterval(intervalId)
  }, [autoProgress, guidance, isLoading, handleGuideMe])

  // Handlers
  const handleStartGuidance = async (isUpdate: boolean) => {
    if (!isUpdate) setGuidance(null)
    await handleGuideMe(guidance, isUpdate)
  }

  const openOptions = () => {
    chrome.runtime.openOptionsPage()
  }

  const handleReset = () => {
    setGoal("")
    setGuidance(null)
  }

  if (!hasKey) {
    return <WelcomeView onOpenOptions={openOptions} />
  }

  return (
    <Box sx={{ width: 400, height: 600, display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', overflow: 'hidden' }}>

      {/* Header */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" color="primary" fontWeight="bold">WebGuide</Typography>
        <Box>
          <Button size="small" onClick={handleReset} sx={{ mr: 1, textTransform: 'none' }}>
            New Task
          </Button>
          <IconButton size="small" onClick={openOptions}>
            <Settings size={20} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ p: 2, overflowY: 'auto', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>

        {/* Goal Input Section */}
        <GoalInput
          goal={goal}
          onGoalChange={setGoal}
          onGuideMe={handleStartGuidance}
          isLoading={isLoading}
          isListening={isListening}
          onToggleListening={toggleListening}
          hasGuidance={!!guidance}
        />

        {/* Response Display Section */}
        {guidance && (
          <ResponseDisplay
            guidance={guidance}
            onSpeak={speak}
          />
        )}

      </Box>
    </Box>
  )
}

export default SidePanel
