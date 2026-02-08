import { Box } from "@mui/material"

import type { GuidanceResponse } from "../utils/gemini"
import { GuidanceDetails } from "./response/GuidanceDetails"
import { NextStepCard } from "./response/NextStepCard"
import { ProgressSteps } from "./response/ProgressSteps"
import { SpokenGuidancePlayer } from "./response/SpokenGuidancePlayer"

interface ResponseDisplayProps {
  guidance: GuidanceResponse
  onSpeak: (text: string) => void
}

export const ResponseDisplay = ({
  guidance,
  onSpeak
}: ResponseDisplayProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <SpokenGuidancePlayer text={guidance.spoken_guidance} onSpeak={onSpeak} />
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
