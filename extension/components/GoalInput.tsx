import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  TextField,
  Typography
} from "@mui/material"
import { Mic, Send, Volume2 } from "lucide-react"

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
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault()
      onSubmit()
    }
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      <Typography variant="subtitle2" fontWeight="600" color="text.primary">
        {label}
      </Typography>
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          bgcolor: "action.hover",
          borderRadius: 3,
          p: 0.5
        }}>
        <TextField
          fullWidth
          multiline
          minRows={2}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            sx: { px: 1.5, py: 1, fontSize: "0.95rem" }
          }}
        />
        <IconButton
          onClick={onToggleListening}
          color={isListening ? "error" : "default"}
          sx={{ position: "absolute", bottom: 4, right: 4 }}
          size="small">
          <Mic size={18} />
        </IconButton>
      </Paper>

      <Button
        variant="contained"
        fullWidth
        disableElevation
        sx={{ borderRadius: 8, py: 1, mt: 0.5 }}
        onClick={onSubmit}
        disabled={isLoading}
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
        Shift + Enter to send
      </Typography>
    </Box>
  )
}
