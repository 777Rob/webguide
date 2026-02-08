import {
  Box,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useTheme
} from "@mui/material"

import type { GuidanceResponse } from "../../utils/gemini"

interface ProgressStepsProps {
  steps: GuidanceResponse["steps"]
}

export const ProgressSteps = ({ steps }: ProgressStepsProps) => {
  const theme = useTheme()

  if (!steps || steps.length === 0) return null

  return (
    <Box component="section" aria-label="Guidance Plan">
      <Typography
        variant="caption"
        color="text.secondary"
        fontWeight="bold"
        sx={{ mb: 2, display: "block", letterSpacing: 1 }}>
        PLAN
      </Typography>
      <Stepper
        orientation="vertical"
        activeStep={0}
        connector={
          <Box
            sx={{
              height: 10,
              width: 2,
              bgcolor: "divider",
              ml: 0.6,
              my: 0.5
            }}
          />
        }
        sx={{
          "& .MuiStepLabel-root": { p: 0 },
          "& .MuiStepContent-root": { borderLeft: "none", ml: 0.6, pl: 2 }
        }}>
        {steps.map((step, index) => {
          const isCompleted = step.status === "completed"
          return (
            <Step key={index} active={true} expanded={true} sx={{ mb: 1.5 }}>
              <StepLabel
                icon={
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      bgcolor: isCompleted
                        ? "primary.main"
                        : "action.disabledBackground",
                      mt: 0.5
                    }}
                  />
                }>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{
                    textDecoration: isCompleted ? "line-through" : "none",
                    opacity: isCompleted ? 0.7 : 1
                  }}>
                  {step.description}
                </Typography>
              </StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </Box>
  )
}
