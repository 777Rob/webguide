import { useState, useEffect } from "react"
import { Settings, Sun, Moon, RotateCcw } from "lucide-react"
import { Box, Button, IconButton, Paper, Typography } from "@mui/material"
import { useStorage } from "@plasmohq/storage/hook"

import { getApiKey, getAutoProgress } from "./utils/storage"
import type { GuidanceResponse } from "./utils/gemini"

import { useSpeechRecognition } from "./hooks/useSpeechRecognition"
import { useGuidance } from "./hooks/useGuidance"

import { WelcomeView } from "./components/WelcomeView"
import { GoalInput } from "./components/GoalInput"
import { ResponseDisplay } from "./components/ResponseDisplay"
import { CustomThemeProvider, useThemeMode } from "./theme"


function SidePanelContent() {
  const [goal, setGoal] = useStorage<string>("userGoal", "")
  const [hasKey, setHasKey] = useState(false)
  const [autoProgress, setAutoProgress] = useState(false)
  const [chatInput, setChatInput] = useState("")

  // Theme hook
  const { mode, toggleTheme } = useThemeMode()

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
  const {
    isListening,
    toggleListening
  } = useSpeechRecognition({
    onResult: (transcript) => {
      if (guidance) {
        setChatInput(transcript)
      } else {
        setGoal(transcript)
      }
    },
    onError: (err) => console.error("Speech error", err)
  })

  // useGuidance handles the "smart" auto-progress internally now
  const {
    isLoading,
    handleGuideMe,
    speak
  } = useGuidance({
    goal,
    onGuidanceUpdate: (data) => setGuidance(data),
    autoProgress
  })

  // Handlers
  const handleStartGuidance = async (isUpdate: boolean, customPrompt?: string) => {
    if (!isUpdate) {
      setGuidance(null)
      await handleGuideMe(null, false)
    } else {
      // If it's an update (follow-up), pass the custom prompt
      await handleGuideMe(guidance, true, customPrompt)
      setChatInput("") // Clear chat input after sending
    }
  }

  const openOptions = () => {
    chrome.runtime.openOptionsPage()
  }

  const handleReset = () => {
    setGoal("")
    setChatInput("")
    setGuidance(null)
  }

  if (!hasKey) {
    return <WelcomeView onOpenOptions={openOptions} />
  }

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default', color: 'text.primary', overflow: 'hidden' }}>

      {/* Header */}
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" color="text.primary" fontWeight="bold">WebGuide</Typography>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <IconButton size="small" onClick={toggleTheme} sx={{ color: 'text.secondary' }}>
            {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
          <IconButton size="small" onClick={handleReset} sx={{ color: 'text.secondary' }}>
            <RotateCcw size={20} />
          </IconButton>
          <IconButton size="small" onClick={openOptions} sx={{ color: 'text.secondary' }}>
            <Settings size={20} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ p: 2, overflowY: 'auto', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>

        {/* Active Goal Display (Only when guidance exists) */}
        {guidance && (
          <Box sx={{ mb: 1 }}>
            <Typography variant="caption" color="text.secondary" fontWeight="bold">ACTIVE GOAL</Typography>
            <Paper elevation={0} sx={{ p: 1.5, bgcolor: 'action.selected', borderRadius: 2, mt: 0.5 }}>
              <Typography variant="body2" fontWeight="500">{goal}</Typography>
            </Paper>
          </Box>
        )}

        {/* Input Section - Changes based on state */}
        <GoalInput
          value={guidance ? chatInput : goal}
          onChange={guidance ? setChatInput : setGoal}
          onSubmit={() => handleStartGuidance(!!guidance, guidance ? chatInput : undefined)}
          isLoading={isLoading}
          isListening={isListening}
          onToggleListening={toggleListening}
          label={guidance ? "Ask a follow-up or update status" : "What is your goal?"}
          placeholder={guidance ? "e.g., 'Where is that button?' or 'I did it, next step'" : "e.g., 'How do I join this hackathon?'"}
          buttonText={guidance ? "Send" : "Guide Me"}
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

function SidePanel() {
  return (
    <CustomThemeProvider>
      <SidePanelContent />
    </CustomThemeProvider>
  )
}

export default SidePanel
