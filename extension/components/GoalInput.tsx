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
  isPermissionDenied?: boolean
  onToggleListening: () => void
  label: string
  placeholder: string
  buttonText?: string
  onNext?: () => void
}

export const GoalInput = ({
  value,
  onChange,
  onSubmit,
  isLoading,
  isListening,
  isPermissionDenied,
  onToggleListening,
  label,
  placeholder,
  buttonText = "Guide Me",
  onNext
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
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Paper
        elevation={0}
        sx={{
          bgcolor: "action.hover",
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          pr: 1
        }}>
        <TextField
          id="goal-input"
          fullWidth
          multiline
          minRows={1}
          maxRows={4}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            sx: { px: 2, py: 1.5, fontSize: "0.95rem" }
          }}
          aria-label={label}
        />

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Tooltip title={isListening ? "Stop listening" : "Start voice input"}>
            <IconButton
              onClick={onToggleListening}
              color={
                isPermissionDenied
                  ? "warning"
                  : isListening
                    ? "error"
                    : "default"
              }
              size="small"
              aria-label={isListening ? "Stop listening" : "Start voice input"}>
              <Mic size={20} />
            </IconButton>
          </Tooltip>

          <Tooltip title={buttonText}>
            <span>
              <IconButton
                onClick={onSubmit}
                color="primary"
                disabled={isLoading || (!value.trim() && !isListening)}
                size="small">
                {isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <Send size={20} />
                )}
              </IconButton>
            </span>
          </Tooltip>
        </Box>
      </Paper>

      {isPermissionDenied && (
        <Button
          variant="text"
          color="warning"
          size="small"
          onClick={() =>
            chrome.tabs.create({
              url: chrome.runtime.getURL("tabs/mic-permission.html")
            })
          }
          sx={{
            fontSize: "0.75rem",
            textTransform: "none",
            justifyContent: "flex-start",
            px: 1
          }}>
          ⚠️ Microphone blocked. Click to enable.
        </Button>
      )}

      {onNext && (
        <Button
          variant="contained"
          fullWidth
          disableElevation
          sx={{
            borderRadius: 8,
            py: 0.75,
            textTransform: "none",
            fontWeight: 600,
            mt: 0.5
          }}
          onClick={onNext}
          disabled={isLoading}>
          Next Step
        </Button>
      )}
    </Box>
  )
}
