"use client";

import { Box, useTheme } from "@mui/material";

export default function VideoSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1000px",
        position: "relative",
        paddingTop: "50%",
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: theme.shadows[10],
        bgcolor: "black",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
        src="https://www.youtube.com/embed/IfK_boeTsgY"
        title="WebGuide Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
}
