import { Box, Typography } from "@mui/material";

export default function PhilosophySection() {
  return (
    <Box maxWidth="800px">
      <Typography
        variant="h3"
        gutterBottom
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4 }}
      >
        Philosophy: Guide, Don&apos;t Take Over
      </Typography>
      <Typography
        variant="body1"
        paragraph
        fontSize="1.1rem"
        color="text.secondary"
      >
        In the age of autonomous agents that try to click buttons for you,
        WebGuide takes a different approach. We believe that{" "}
        <strong>you</strong> are the best operator of your browser. The websites
        you use were designed for humans, and often the most intuitive way to
        fill out a form or select an option is to simply click it yourself.
      </Typography>
      <Typography
        variant="body1"
        paragraph
        fontSize="1.1rem"
        color="text.secondary"
      >
        WebGuide acts as an intelligent companion sitting next to you. It sees
        what you see, understands your goal, and provides visual cues, spoken
        instructions, and step-by-step plans—without trying to be the captain.
        You stay in the driver&apos;s seat.
      </Typography>
    </Box>
  );
}
