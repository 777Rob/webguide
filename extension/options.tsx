import { Box, Button, TextField, Typography, Container, Paper, Alert, Snackbar, FormControlLabel, Switch, CircularProgress } from "@mui/material"
import { useOptions } from "./hooks/useOptions"

import { CustomThemeProvider } from "./theme"

function OptionsContent() {
    const {
        apiKey,
        setApiKey,
        autoProgress,
        setAutoProgress,
        snackbarOpen,
        closeSnackbar,
        saveSettings,
        isLoading
    } = useOptions()

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: 'background.default' }}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', bgcolor: 'background.default' }}>
            <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3, bgcolor: 'background.paper' }}>
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
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your API Key"
                />

                <FormControlLabel
                    control={
                        <Switch
                            checked={autoProgress}
                            onChange={(e) => setAutoProgress(e.target.checked)}
                            color="primary"
                        />
                    }
                    label="Auto-detect Progress (Poll every 10s)"
                />

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={saveSettings}
                    fullWidth
                >
                    Save Settings
                </Button>
            </Paper>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={closeSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={closeSnackbar} severity="success" sx={{ width: '100%' }}>
                    API Key saved successfully!
                </Alert>
            </Snackbar>
        </Container>
    )
}

function Options() {
    return (
        <CustomThemeProvider>
            <OptionsContent />
        </CustomThemeProvider>
    )
}

export default Options
