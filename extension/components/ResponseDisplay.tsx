import { useState } from "react"
import { Box, Button, Paper, Typography, Stepper, Step, StepLabel, Card, CardContent, Collapse, useTheme, alpha, IconButton } from "@mui/material"
import { Volume2, ChevronDown, ChevronUp, Play } from "lucide-react"
import type { GuidanceResponse } from "../utils/gemini"

interface ResponseDisplayProps {
    guidance: GuidanceResponse
    onSpeak: (text: string) => void
}

export const ResponseDisplay = ({ guidance, onSpeak }: ResponseDisplayProps) => {
    const [showDetails, setShowDetails] = useState(false)
    const theme = useTheme()

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

            {/* Spoken Guidance Player */}
            <Box sx={{
                p: 2,
                borderRadius: 4,
                bgcolor: 'action.hover',
                display: 'flex',
                alignItems: 'center',
                gap: 2
            }}>
                <IconButton
                    onClick={() => onSpeak(guidance.spoken_guidance)}
                    sx={{
                        bgcolor: 'background.paper',
                        boxShadow: 1,
                        '&:hover': { bgcolor: 'background.paper' }
                    }}
                    size="small"
                >
                    <Volume2 size={18} color={theme.palette.primary.main} />
                </IconButton>
                <Typography variant="body2" sx={{ flexGrow: 1, color: 'text.primary', fontWeight: 500 }}>
                    {guidance.spoken_guidance}
                </Typography>
            </Box>

            {/* Progress Stepper */}
            {guidance.steps && guidance.steps.length > 0 && (
                <Box>
                    <Typography variant="caption" color="text.secondary" fontWeight="bold" sx={{ mb: 2, display: 'block', letterSpacing: 1 }}>
                        PLAN
                    </Typography>
                    <Stepper orientation="vertical" activeStep={0} connector={<Box sx={{ height: 10, width: 2, bgcolor: 'divider', ml: 0.6, my: 0.5 }} />} sx={{
                        '& .MuiStepLabel-root': { p: 0 },
                        '& .MuiStepContent-root': { borderLeft: 'none', ml: 0.6, pl: 2 }
                    }}>
                        {guidance.steps.map((step, index) => (
                            <Step key={index} active={true} expanded={true} sx={{ mb: 1.5 }}>
                                <StepLabel icon={
                                    <Box sx={{
                                        width: 10, height: 10, borderRadius: '50%',
                                        bgcolor: step.status === 'completed' ? 'primary.main' : 'action.disabledBackground',
                                        mt: 0.5
                                    }} />
                                }>
                                    <Typography variant="body2" color="text.primary">{step.description}</Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            )}

            {/* Detailed Guidance & Next Steps */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Next Steps Hero */}
                <Paper elevation={0} sx={{
                    p: 2.5,
                    borderRadius: 4,
                    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.15)} 100%)`,
                }}>
                    <Typography variant="caption" fontWeight="bold" color="primary" sx={{ letterSpacing: 1, mb: 1, display: 'block' }}>NEXT STEP</Typography>
                    <Typography variant="body1" fontWeight="500" sx={{ color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark' }}>
                        {guidance.next_steps}
                    </Typography>
                </Paper>

                {/* Simplified Accordion */}
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            py: 1,
                            userSelect: 'none'
                        }}
                        onClick={() => setShowDetails(!showDetails)}
                    >
                        <Typography variant="subtitle2" fontWeight="600" color="text.secondary" sx={{ flexGrow: 1 }}>
                            Show Details
                        </Typography>
                        <IconButton size="small" sx={{ transform: showDetails ? 'rotate(180deg)' : 'none', transition: '0.2s' }}>
                            <ChevronDown size={16} />
                        </IconButton>
                    </Box>
                    <Collapse in={showDetails}>
                        <Box sx={{ pt: 1, pb: 2, color: 'text.secondary' }}>
                            <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', mb: 2 }}>
                                {guidance.text_guidance}
                            </Typography>
                            {guidance.reasoning && (
                                <Typography variant="caption" fontFamily="monospace" sx={{ display: 'block', p: 1.5, bgcolor: 'action.hover', borderRadius: 2 }}>
                                    {guidance.reasoning}
                                </Typography>
                            )}
                        </Box>
                    </Collapse>
                </Box>
            </Box>

        </Box>
    )
}
