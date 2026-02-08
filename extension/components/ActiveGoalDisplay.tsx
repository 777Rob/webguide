import { Box, Button, Paper, Typography } from "@mui/material"
import { Pause, Play } from "lucide-react"

import type { GuidanceResponse } from "../utils/gemini"

interface ActiveGoalDisplayProps {
  guidance: GuidanceResponse | null
  goal: string
  autoProgress: boolean
  isPaused: boolean
  onTogglePause: () => void
  onTogglePause: () => void
}

export const ActiveGoalDisplay = ({
  guidance,
  goal,
  autoProgress,
  isPaused,
  onTogglePause
}: ActiveGoalDisplayProps) => {
  if (!guidance) return null

  return (
    <Box sx={{ mb: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 0.5
        }}>
        <Typography variant="caption" color="text.secondary" fontWeight="bold">
          ACTIVE GOAL
        </Typography>
        <Box display="flex" gap={1}>
          {/* Pause/Resume Button */}
          {autoProgress && (
            <Button
              size="small"
              startIcon={isPaused ? <Play size={14} /> : <Pause size={14} />}
              onClick={onTogglePause}
              sx={{
                minWidth: 0,
                p: 0.5,
                fontSize: "0.75rem",
                color: isPaused ? "warning.main" : "text.secondary"
              }}>
              {isPaused ? "Resume" : "Pause"}
            </Button>
          )}
        </Box>
      </Box>
      <Paper
        elevation={0}
        sx={{ p: 1.5, bgcolor: "action.selected", borderRadius: 2 }}>
        <Typography variant="body2" fontWeight="500">
          {guidance.title || goal}
        </Typography>
      </Paper>
    </Box>
  )
}
