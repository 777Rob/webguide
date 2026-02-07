import { Box, Button, IconButton, TextField, Typography, CircularProgress, Paper } from "@mui/material"
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Typography variant="subtitle2" fontWeight="600" color="text.primary">What is your goal?</Typography>
            <Paper
                elevation={0}
                sx={{
                    position: 'relative',
                    bgcolor: 'action.hover',
                    borderRadius: 3,
                    p: 0.5
                }}
            >
                <TextField
                    fullWidth
                    multiline
                    minRows={2}
                    placeholder="e.g., 'How do I join this hackathon?'"
                    value={goal}
                    onChange={(e) => onGoalChange(e.target.value)}
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                        sx: { px: 1.5, py: 1, fontSize: '0.95rem' }
                    }}
                />
                <IconButton
                    onClick={onToggleListening}
                    color={isListening ? "error" : "default"}
                    sx={{ position: 'absolute', bottom: 4, right: 4 }}
                    size="small"
                >
                    <Mic size={18} />
                </IconButton>
            </Paper>

            <Button
                variant="contained"
                fullWidth
                disableElevation
                sx={{ borderRadius: 8, py: 1, mt: 0.5 }}
                onClick={() => onGuideMe(false)}
                disabled={isLoading}
                startIcon={isLoading ? <CircularProgress size={16} color="inherit" /> : <Send size={16} />}
            >
                {isLoading ? "Analyzing..." : "Guide Me"}
            </Button>

            {hasGuidance && (
                <Button
                    variant="text"
                    fullWidth
                    sx={{ borderRadius: 8, color: 'text.secondary' }}
                    onClick={() => onGuideMe(true)}
                    disabled={isLoading}
                >
                    {isLoading ? "Checking..." : "Check Progress"}
                </Button>
            )}
        </Box>
    )
}
