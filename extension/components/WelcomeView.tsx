import { Box, Button, Typography } from "@mui/material"

interface WelcomeViewProps {
    onOpenOptions: () => void
}

export const WelcomeView = ({ onOpenOptions }: WelcomeViewProps) => {
    return (
        <Box sx={{ width: 350, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Typography variant="h5" color="primary" fontWeight="bold">Welcome</Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                Please set your Gemini API Key in settings.
            </Typography>
            <Button variant="contained" onClick={onOpenOptions}>Open Settings</Button>
        </Box>
    )
}
