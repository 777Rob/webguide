import { alpha, Paper, Typography, useTheme } from "@mui/material"

interface NextStepCardProps {
  nextStep: string
}

export const NextStepCard = ({ nextStep }: NextStepCardProps) => {
  const theme = useTheme()

  return (
    <Paper
      elevation={0}
      component="article"
      aria-label="Next Step"
      sx={{
        p: 2.5,
        borderRadius: 4,
        position: "relative",
        overflow: "hidden",
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
      }}>
      <Typography
        variant="caption"
        fontWeight="bold"
        color="primary"
        sx={{
          letterSpacing: 1,
          mb: 1,
          display: "block",
          textTransform: "uppercase"
        }}>
        NEXT STEP
      </Typography>
      <Typography
        variant="body1"
        fontWeight="500"
        sx={{
          color: theme.palette.text.primary,
          lineHeight: 1.6
        }}>
        {nextStep}
      </Typography>
    </Paper>
  )
}
