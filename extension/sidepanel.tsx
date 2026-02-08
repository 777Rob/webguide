import { Box, Button, Typography } from "@mui/material"

import { ActiveGoalDisplay } from "./components/ActiveGoalDisplay"
import { GoalInput } from "./components/GoalInput"
import { ResponseDisplay } from "./components/ResponseDisplay"
import { SidePanelHeader } from "./components/SidePanelHeader"
import { WelcomeView } from "./components/WelcomeView"
import { useAppFlow } from "./hooks/useAppFlow"
import { CustomThemeProvider, useThemeMode } from "./theme"

function SidePanelContent() {
  const { mode, toggleTheme } = useThemeMode()

  const {
    goal,
    setGoal,
    guidance,
    chatInput,
    setChatInput,
    hasKey,
    autoProgress,
    isLoading,
    isListening,
    isPermissionDenied,
    isPaused,
    handleStartGuidance,
    handleReset,
    openOptions,
    toggleListening,
    togglePause,
    speak,
    sendOverlaysToContent // Expose for debugging
  } = useAppFlow()

  if (!hasKey) {
    return <WelcomeView onOpenOptions={openOptions} />
  }

  // Debug handler
  const handleTestOverlay = () => {
    if (sendOverlaysToContent) {
      sendOverlaysToContent([
        {
          description: "Test Overlay (Center)",
          coordinates_approx: [0.4, 0.4, 0.6, 0.6] // Center box
        }
      ])
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        color: "text.primary",
        overflow: "hidden"
      }}>
      <SidePanelHeader
        mode={mode}
        toggleTheme={toggleTheme}
        onReset={handleReset}
        onOpenOptions={openOptions}
      />

      <Box
        component="main"
        sx={{
          p: 2,
          overflowY: "auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}>
        <ActiveGoalDisplay
          guidance={guidance}
          goal={goal}
          autoProgress={autoProgress}
          isPaused={isPaused}
          onTogglePause={togglePause}
        />

        <GoalInput
          value={guidance ? chatInput : goal}
          onChange={guidance ? setChatInput : setGoal}
          onSubmit={() =>
            handleStartGuidance(!!guidance, guidance ? chatInput : undefined)
          }
          isLoading={isLoading}
          isListening={isListening}
          isPermissionDenied={isPermissionDenied}
          onToggleListening={toggleListening}
          label={
            guidance ? "Ask a follow-up or update status" : "What is your goal?"
          }
          placeholder={
            guidance
              ? "e.g., 'Where is that button?' or 'I did it, next step'"
              : "e.g., 'How do I join this hackathon?'"
          }
          buttonText={guidance ? "Send" : "Guide Me"}
        />

        {guidance && <ResponseDisplay guidance={guidance} onSpeak={speak} />}

        {/* Persistent Debug Actions */}
        <Box
          sx={{
            mt: "auto",
            pt: 2,
            borderTop: "1px solid",
            borderColor: "divider"
          }}>
          <Typography
            variant="caption"
            color="text.secondary"
            display="block"
            mb={1}>
            DEBUG UTILS
          </Typography>
          <Button
            variant="outlined"
            color="warning"
            size="small"
            fullWidth
            onClick={handleTestOverlay}>
            Test Visual Arrow
          </Button>
        </Box>
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
