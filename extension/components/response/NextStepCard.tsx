import { alpha, Paper, Typography, useTheme } from "@mui/material"

interface NextStepCardProps {
  nextStep: string
}

export const NextStepCard = ({ nextStep }: NextStepCardProps) => {
  const theme = useTheme()

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 4,
        backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.15)} 100%)`
      }}>
      <Typography
        variant="caption"
        fontWeight="bold"
        color="primary"
        sx={{ letterSpacing: 1, mb: 1, display: "block" }}>
        NEXT STEP
      </Typography>
      <Typography
        variant="body1"
        fontWeight="500"
        sx={{
          color:
            theme.palette.mode === "dark" ? "primary.light" : "primary.dark"
        }}>
        {nextStep}
      </Typography>
    </Paper>
  )
}
