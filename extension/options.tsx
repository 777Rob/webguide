import { useState, useEffect } from "react"
import { getApiKey, setApiKey, getAutoProgress, setAutoProgress } from "./utils/storage"
import { Box, Button, TextField, Typography, Container, Paper, Alert, Snackbar, FormControlLabel, Switch } from "@mui/material"

function Options() {
    const [apiKey, setApiKeyValue] = useState("")
    const [autoProgress, setAutoProgressValue] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    useEffect(() => {
        const loadSettings = async () => {
            const key = await getApiKey()
            if (key) setApiKeyValue(key)

            const auto = await getAutoProgress()
            setAutoProgressValue(auto)
        }
        loadSettings()
    }, [])

    const handleSave = async () => {
        if (!apiKey) return
        await setApiKey(apiKey)
        await setAutoProgress(autoProgress)
        setSnackbarOpen(true)
    }

    return (
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', bgcolor: '#f5f5f5' }}>
            <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom color="primary" fontWeight="bold">
                    WebGuide Settings
                </Typography>

                <Typography variant="body1" color="text.secondary">
                    Configure your assistant settings.
                </Typography>

                <TextField
                    label="Gemini API Key"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={apiKey}
                    onChange={(e) => setApiKeyValue(e.target.value)}
                    placeholder="Enter your API Key"
                />

                <FormControlLabel
                    control={
                        <Switch
                            checked={autoProgress}
                            onChange={(e) => setAutoProgressValue(e.target.checked)}
                            color="primary"
                        />
                    }
                    label="Auto-detect Progress (Poll every 10s)"
                />

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleSave}
                    fullWidth
                >
                    Save Settings
                </Button>
            </Paper>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
                    API Key saved successfully!
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default Options
