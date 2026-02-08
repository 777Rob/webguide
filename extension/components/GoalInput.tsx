import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  TextField,
  Tooltip,
  Typography
} from "@mui/material"
import { Mic, Send } from "lucide-react"
import { useCallback } from "react"

interface GoalInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  isLoading: boolean
  isListening: boolean
  onToggleListening: () => void
  label: string
  placeholder: string
  buttonText?: string
}

export const GoalInput = ({
  value,
  onChange,
  onSubmit,
  isLoading,
  isListening,
  onToggleListening,
  label,
  placeholder,
  buttonText = "Guide Me"
}: GoalInputProps) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        onSubmit()
      }
    },
    [onSubmit]
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value)
    },
    [onChange]
  )

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      <Typography
        component="label"
        htmlFor="goal-input"
        variant="subtitle2"
        fontWeight="600"
        color="text.primary">
        {label}
      </Typography>
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          bgcolor: "action.hover",
          borderRadius: 3,
          p: 0.5,
          border: "1px solid",
          borderColor: "divider"
        }}>
        <TextField
          id="goal-input"
          fullWidth
          multiline
          minRows={2}
          maxRows={6}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            sx: { px: 1.5, py: 1, fontSize: "0.95rem" }
          }}
          aria-label={label}
        />
        <Tooltip title={isListening ? "Stop listening" : "Start voice input"}>
          <IconButton
            onClick={onToggleListening}
            color={isListening ? "error" : "default"}
            sx={{
              position: "absolute",
              bottom: 4,
              right: 4,
              transition: "all 0.2s"
            }}
            size="small"
            aria-label={isListening ? "Stop listening" : "Start voice input"}>
            <Mic size={18} />
          </IconButton>
        </Tooltip>
      </Paper>

      <Button
        variant="contained"
        fullWidth
        disableElevation
        sx={{
          borderRadius: 8,
          py: 1,
          mt: 0.5,
          textTransform: "none",
          fontWeight: 600
        }}
        onClick={onSubmit}
        disabled={isLoading || (!value.trim() && !isListening)}
        startIcon={
          isLoading ? (
            <CircularProgress size={16} color="inherit" />
          ) : (
            <Send size={16} />
          )
        }>
        {isLoading ? "Analyzing..." : buttonText}
      </Button>
      <Typography
        variant="caption"
        color="text.secondary"
        align="center"
        sx={{ display: "block", mt: -0.5 }}>
        Press Enter to send
      </Typography>
    </Box>
  )
}
