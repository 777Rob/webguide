import { Box, IconButton, Tooltip, Typography } from "@mui/material"
import { Moon, RotateCcw, Settings, Sun } from "lucide-react"

interface SidePanelHeaderProps {
  mode: "light" | "dark"
  toggleTheme: () => void
  onReset: () => void
  onOpenOptions: () => void
}

export const SidePanelHeader = ({
  mode,
  toggleTheme,
  onReset,
  onOpenOptions
}: SidePanelHeaderProps) => {
  return (
    <Box
      component="header"
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper"
      }}>
      <Typography variant="h6" color="text.primary" fontWeight="bold">
        WebGuide
      </Typography>
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <Tooltip
          title={
            mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
          }>
          <IconButton
            size="small"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            sx={{ color: "text.secondary" }}>
            {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
        </Tooltip>

        <Tooltip title="Reset Chat">
          <IconButton
            size="small"
            onClick={onReset}
            aria-label="Reset chat"
            sx={{ color: "text.secondary" }}>
            <RotateCcw size={20} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Settings">
          <IconButton
            size="small"
            onClick={onOpenOptions}
            aria-label="Open settings"
            sx={{ color: "text.secondary" }}>
            <Settings size={20} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}
