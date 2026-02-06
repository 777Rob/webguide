import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material"
import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <Box
      sx={{
        minWidth: "full",
        p: 1
      }}>
      <Typography variant="h6" component="div">
        WebGuide
      </Typography>
    </Box>
  )
}

export default IndexPopup
