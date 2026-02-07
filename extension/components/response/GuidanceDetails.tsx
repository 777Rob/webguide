import { Box, Collapse, IconButton, Typography } from "@mui/material"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface GuidanceDetailsProps {
  textGuidance: string
  reasoning?: string
}

export const GuidanceDetails = ({
  textGuidance,
  reasoning
}: GuidanceDetailsProps) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          py: 1,
          userSelect: "none"
        }}
        onClick={() => setShowDetails(!showDetails)}>
        <Typography
          variant="subtitle2"
          fontWeight="600"
          color="text.secondary"
          sx={{ flexGrow: 1 }}>
          Show Details
        </Typography>
        <IconButton
          size="small"
          sx={{
            transform: showDetails ? "rotate(180deg)" : "none",
            transition: "0.2s"
          }}>
          <ChevronDown size={16} />
        </IconButton>
      </Box>
      <Collapse in={showDetails}>
        <Box sx={{ pt: 1, pb: 2, color: "text.secondary" }}>
          <Typography variant="body2" sx={{ whiteSpace: "pre-wrap", mb: 2 }}>
            {textGuidance}
          </Typography>
          {reasoning && (
            <Typography
              variant="caption"
              fontFamily="monospace"
              sx={{
                display: "block",
                p: 1.5,
                bgcolor: "action.hover",
                borderRadius: 2
              }}>
              {reasoning}
            </Typography>
          )}
        </Box>
      </Collapse>
    </Box>
  )
}
