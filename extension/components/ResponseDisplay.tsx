import { Box, Button } from "@mui/material"

import type { GuidanceResponse } from "../utils/gemini"
import { GuidanceDetails } from "./response/GuidanceDetails"
import { NextStepCard } from "./response/NextStepCard"
import { ProgressSteps } from "./response/ProgressSteps"
import { SpokenGuidancePlayer } from "./response/SpokenGuidancePlayer"

interface ResponseDisplayProps {
  guidance: GuidanceResponse
  onSpeak: (text: string) => void
  onNext: () => void
  isLoading: boolean
}

export const ResponseDisplay = ({
  guidance,
  onSpeak,
  onNext,
  isLoading
}: ResponseDisplayProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <SpokenGuidancePlayer text={guidance.spoken_guidance} onSpeak={onSpeak} />

      <Button
        variant="contained"
        fullWidth
        disableElevation
        sx={{
          borderRadius: 8,
          py: 0.75,
          textTransform: "none",
          fontWeight: 600
        }}
        onClick={onNext}
        disabled={isLoading}>
        Next Step
      </Button>

      <ProgressSteps steps={guidance.steps} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <NextStepCard nextStep={guidance.next_steps} />
        {process.env.PLASMO_PUBLIC_DEV_MODE === "true" && (
          <GuidanceDetails
            textGuidance={guidance.text_guidance}
            reasoning={guidance.reasoning}
          />
        )}
      </Box>
    </Box>
  )
}
