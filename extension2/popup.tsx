import { useState, useEffect } from "react"
import { Mic, Send, Settings, Volume2, ChevronDown, ChevronUp } from "lucide-react"
import {
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  CircularProgress,
  Collapse,
  Card,
  CardContent
} from "@mui/material"

import { getApiKey } from "./utils/storage"
import type { GuidanceResponse } from "./utils/gemini"

function Popup() {
  const [goal, setGoal] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [guidance, setGuidance] = useState<GuidanceResponse | null>(null)
  const [hasKey, setHasKey] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    checkKey()
  }, [])

  const checkKey = async () => {
    const key = await getApiKey()
    setHasKey(!!key)
  }

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false)
      return
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SpeechRecognition) {
      console.error("Voice input not supported")
      alert("Voice input not supported in this browser")
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.start()
    setIsListening(true)

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      setGoal(transcript)
      setIsListening(false)
    }

    recognition.onerror = () => {
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }
  }

  const handleGuideMe = async () => {
    if (!goal.trim()) return

    setIsLoading(true)
    setGuidance(null)

    try {
      const response = await chrome.runtime.sendMessage({
        action: "ANALYZE_PAGE",
        userGoal: goal
      })

      if (response.error) {
        throw new Error(response.error)
      }

      const data = response.data as GuidanceResponse
      setGuidance(data)

      speak(data.spoken_guidance)
      sendOverlaysToContent(data.visual_suggestions)

    } catch (error) {
      console.error(error)
      alert(error.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
  }

  const sendOverlaysToContent = async (suggestions: any[]) => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, {
        action: "SHOW_OVERLAYS",
        suggestions
      })
    }
  }

  const openOptions = () => {
    chrome.runtime.openOptionsPage()
  }

  if (!hasKey) {
    return (
      <Box sx={{ width: 350, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Typography variant="h5" color="primary" fontWeight="bold">Welcome</Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Please set your Gemini API Key in settings.
        </Typography>
        <Button variant="contained" onClick={openOptions}>Open Settings</Button>
      </Box>
    )
  }

  return (
    <Box sx={{ width: 400, height: 600, display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', overflow: 'hidden' }}>

      {/* Header */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" color="primary" fontWeight="bold">WebGuide</Typography>
        <IconButton size="small" onClick={openOptions}>
          <Settings size={20} />
        </IconButton>
      </Box>

      <Box sx={{ p: 2, overflowY: 'auto', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>

        {/* Goal Input */}
        <Box>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>What is your goal?</Typography>
          <Box sx={{ position: 'relative' }}>
            <TextField
              fullWidth
              multiline
              rows={2}
              placeholder="e.g., 'How do I join this hackathon?'"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              variant="outlined"
              size="small"
            />
            <IconButton
              onClick={toggleListening}
              color={isListening ? "error" : "default"}
              sx={{ position: 'absolute', bottom: 4, right: 4 }}
              size="small"
            >
              <Mic size={18} />
            </IconButton>
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            onClick={handleGuideMe}
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={16} color="inherit" /> : <Send size={16} />}
          >
            {isLoading ? "Analyzing..." : "Guide Me"}
          </Button>
        </Box>

        {/* Response Display */}
        {guidance && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

            {/* Spoken Guidance Player */}
            <Paper variant="outlined" sx={{ p: 1.5, display: 'flex', alignItems: 'center', gap: 1.5, bgcolor: '#f8f9fa' }}>
              <Volume2 size={20} color="#1976d2" />
              <Typography variant="body2" sx={{ flexGrow: 1 }}>{guidance.spoken_guidance}</Typography>
              <Button size="small" onClick={() => speak(guidance.spoken_guidance)} sx={{ minWidth: 'auto' }}>Replay</Button>
            </Paper>

            {/* Progress Stepper */}
            {guidance.steps && guidance.steps.length > 0 && (
              <Box>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Plan</Typography>
                <Stepper orientation="vertical" activeStep={0} sx={{
                  '& .MuiStepLabel-label': { fontSize: '0.875rem' },
                  '& .MuiStepIcon-root': { fontSize: '1.25rem' }
                }}>
                  {guidance.steps.map((step, index) => (
                    <Step key={index} active={true} expanded={true}>
                      <StepLabel icon={
                        <div style={{
                          width: 12, height: 12, borderRadius: '50%',
                          background: step.status === 'completed' ? '#1976d2' : '#e0e0e0',
                          border: step.status === 'completed' ? 'none' : '2px solid #bdbdbd'
                        }} />
                      }>
                        <Typography variant="body2" fontWeight="medium">{step.description}</Typography>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            )}

            {/* Detailed Guidance Accordion */}
            <Card variant="outlined">
              <Box
                sx={{ p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', bgcolor: '#f5f5f5' }}
                onClick={() => setShowDetails(!showDetails)}
              >
                <Typography variant="subtitle2" fontWeight="bold">Detailed Guidance</Typography>
                {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </Box>
              <Collapse in={showDetails}>
                <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                  <Typography variant="body2" style={{ whiteSpace: 'pre-wrap' }}>
                    {guidance.text_guidance}
                  </Typography>
                  {guidance.reasoning && (
                    <Box sx={{ mt: 2, pt: 1, borderTop: 1, borderColor: 'divider' }}>
                      <Typography variant="caption" color="text.secondary" fontFamily="monospace">
                        {guidance.reasoning}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Collapse>
            </Card>

            {/* Next Steps */}
            <Paper elevation={0} sx={{ p: 2, bgcolor: '#e3f2fd', borderLeft: 4, borderColor: '#2196f3' }}>
              <Typography variant="subtitle2" fontWeight="bold" color="primary">Next Step:</Typography>
              <Typography variant="body2" color="#0d47a1">{guidance.next_steps}</Typography>
            </Paper>

          </Box>
        )}

      </Box>
    </Box>
  )
}

export default Popup
