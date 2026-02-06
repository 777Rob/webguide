import { useState } from "react"
import { Box, Button, Paper, Typography, Stepper, Step, StepLabel, Card, CardContent, Collapse } from "@mui/material"
import { Volume2, ChevronDown, ChevronUp } from "lucide-react"
import type { GuidanceResponse } from "../utils/gemini"

interface ResponseDisplayProps {
    guidance: GuidanceResponse
    onSpeak: (text: string) => void
}

export const ResponseDisplay = ({ guidance, onSpeak }: ResponseDisplayProps) => {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

            {/* Spoken Guidance Player */}
            <Paper variant="outlined" sx={{ p: 1.5, display: 'flex', alignItems: 'center', gap: 1.5, bgcolor: '#f8f9fa' }}>
                <Volume2 size={20} color="#1976d2" />
                <Typography variant="body2" sx={{ flexGrow: 1 }}>{guidance.spoken_guidance}</Typography>
                <Button size="small" onClick={() => onSpeak(guidance.spoken_guidance)} sx={{ minWidth: 'auto' }}>Replay</Button>
            </Paper>

            {/* Progress Stepper */}
            {guidance.steps && guidance.steps.length > 0 && (
                <Box>
                    <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Plan</Typography>
                    <Stepper orientation="vertical" activeStep={0} sx={{
                        '& .MuiStepLabel-label': { fontSize: '0.875rem' },
                        '& .MuiStepIcon-root': { fontSize: '1.25rem' }
                    }}>
                        {guidance.steps.map((step, index) => (
                            <Step key={index} active={true} expanded={true}>
                                <StepLabel icon={
                                    <div style={{
                                        width: 12, height: 12, borderRadius: '50%',
                                        background: step.status === 'completed' ? '#1976d2' : '#e0e0e0',
                                        border: step.status === 'completed' ? 'none' : '2px solid #bdbdbd'
                                    }} />
                                }>
                                    <Typography variant="body2" fontWeight="medium">{step.description}</Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            )}

            {/* Detailed Guidance Accordion */}
            <Card variant="outlined">
                <Box
                    sx={{ p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', bgcolor: '#f5f5f5' }}
                    onClick={() => setShowDetails(!showDetails)}
                >
                    <Typography variant="subtitle2" fontWeight="bold">Detailed Guidance</Typography>
                    {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </Box>
                <Collapse in={showDetails}>
                    <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                        <Typography variant="body2" style={{ whiteSpace: 'pre-wrap' }}>
                            {guidance.text_guidance}
                        </Typography>
                        {guidance.reasoning && (
                            <Box sx={{ mt: 2, pt: 1, borderTop: 1, borderColor: 'divider' }}>
                                <Typography variant="caption" color="text.secondary" fontFamily="monospace">
                                    {guidance.reasoning}
                                </Typography>
                            </Box>
                        )}
                    </CardContent>
                </Collapse>
            </Card>

            {/* Next Steps */}
            <Paper elevation={0} sx={{ p: 2, bgcolor: '#e3f2fd', borderLeft: 4, borderColor: '#2196f3' }}>
                <Typography variant="subtitle2" fontWeight="bold" color="primary">Next Step:</Typography>
                <Typography variant="body2" color="#0d47a1">{guidance.next_steps}</Typography>
            </Paper>

        </Box>
    )
}
