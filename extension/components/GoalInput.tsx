import { Box, Button, IconButton, TextField, Typography, CircularProgress } from "@mui/material"
import { Mic, Send, Volume2 } from "lucide-react"

interface GoalInputProps {
    goal: string
    onGoalChange: (goal: string) => void
    onGuideMe: (isUpdate: boolean) => void
    isLoading: boolean
    isListening: boolean
    onToggleListening: () => void
    hasGuidance: boolean
}

export const GoalInput = ({
    goal,
    onGoalChange,
    onGuideMe,
    isLoading,
    isListening,
    onToggleListening,
    hasGuidance
}: GoalInputProps) => {
    return (
        <Box>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>What is your goal?</Typography>
            <Box sx={{ position: 'relative' }}>
                <TextField
                    fullWidth
                    multiline
                    rows={2}
                    placeholder="e.g., 'How do I join this hackathon?'"
                    value={goal}
                    onChange={(e) => onGoalChange(e.target.value)}
                    variant="outlined"
                    size="small"
                />
                <IconButton
                    onClick={onToggleListening}
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
                onClick={() => onGuideMe(false)}
                disabled={isLoading}
                startIcon={isLoading ? <CircularProgress size={16} color="inherit" /> : <Send size={16} />}
            >
                {isLoading ? "Analyzing..." : "Guide Me"}
            </Button>

            {hasGuidance && (
                <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 1 }}
                    onClick={() => onGuideMe(true)}
                    disabled={isLoading}
                >
                    {isLoading ? "Checking..." : "I did it! Check Progress"}
                </Button>
            )}
        </Box>
    )
}
