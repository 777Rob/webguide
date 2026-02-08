import { Box, Button, Typography } from "@mui/material"
import { Mic } from "lucide-react"
import { useState } from "react"

import { CustomThemeProvider } from "~theme"

function MicPermissionPage() {
  const [status, setStatus] = useState<
    "idle" | "requesting" | "granted" | "denied"
  >("idle")

  const handleRequestPermission = async () => {
    setStatus("requesting")
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      // Stop tracks immediately, we just needed the permission grant
      stream.getTracks().forEach((t) => t.stop())
      setStatus("granted")
      // Close tab after a brief delay
      setTimeout(() => {
        window.close()
      }, 2000)
    } catch (error) {
      console.error("Permission denied", error)
      setStatus("denied")
    }
  }

  return (
    <CustomThemeProvider>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          p: 4,
          textAlign: "center",
          bgcolor: "background.default",
          color: "text.primary"
        }}>
        <Box
          sx={{
            p: 3,
            borderRadius: "50%",
            bgcolor: status === "granted" ? "success.light" : "action.hover",
            color:
              status === "granted" ? "success.contrastText" : "primary.main"
          }}>
          <Mic size={48} />
        </Box>

        <Typography variant="h4" fontWeight="bold">
          Enable Voice Input
        </Typography>

        <Typography variant="body1" color="text.secondary" maxWidth="sm">
          To use voice commands in the WebGuide sidebar, Chrome requires you to
          grant microphone permission in a tab first.
        </Typography>

        {status === "granted" ? (
          <Typography variant="h6" color="success.main">
            Permission Granted! You can close this tab and try again.
          </Typography>
        ) : status === "denied" ? (
          <Typography variant="body1" color="error">
            Permission denied. Please check your browser settings and try again.
          </Typography>
        ) : (
          <Button
            variant="contained"
            size="large"
            onClick={handleRequestPermission}
            sx={{ px: 4, py: 1.5, borderRadius: 8 }}>
            Allow Microphone Access
          </Button>
        )}
      </Box>
    </CustomThemeProvider>
  )
}

export default MicPermissionPage
