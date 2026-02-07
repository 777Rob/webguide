import { Box } from "@mui/material"
import type { GuidanceResponse } from "../utils/gemini"

import { SpokenGuidancePlayer } from "./response/SpokenGuidancePlayer"
import { ProgressSteps } from "./response/ProgressSteps"
import { NextStepCard } from "./response/NextStepCard"
import { GuidanceDetails } from "./response/GuidanceDetails"

interface ResponseDisplayProps {
    guidance: GuidanceResponse
    onSpeak: (text: string) => void
}

export const ResponseDisplay = ({ guidance, onSpeak }: ResponseDisplayProps) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

            {/* Spoken Guidance Player */}
            <SpokenGuidancePlayer
                text={guidance.spoken_guidance}
                onSpeak={onSpeak}
            />

            {/* Progress Stepper */}
            <ProgressSteps steps={guidance.steps} />

            {/* Detailed Guidance & Next Steps */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                {/* Next Steps Hero */}
                <NextStepCard nextStep={guidance.next_steps} />

                {/* Simplified Accordion */}
                <GuidanceDetails
                    textGuidance={guidance.text_guidance}
                    reasoning={guidance.reasoning}
                />
            </Box>

        </Box>
    )
}
