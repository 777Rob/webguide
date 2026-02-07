import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { Volume2 } from "lucide-react"

interface SpokenGuidancePlayerProps {
  text: string
  onSpeak: (text: string) => void
}

export const SpokenGuidancePlayer = ({
  text,
  onSpeak
}: SpokenGuidancePlayerProps) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 4,
        bgcolor: "action.hover",
        display: "flex",
        alignItems: "center",
        gap: 2
      }}>
      <IconButton
        onClick={() => onSpeak(text)}
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          "&:hover": { bgcolor: "background.paper" }
        }}
        size="small">
        <Volume2 size={18} color={theme.palette.primary.main} />
      </IconButton>
      <Typography
        variant="body2"
        sx={{ flexGrow: 1, color: "text.primary", fontWeight: 500 }}>
        {text}
      </Typography>
    </Box>
  )
}
