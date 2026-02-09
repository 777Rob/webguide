import { Box, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box textAlign="center" maxWidth="800px">
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        fontWeight="800"
        sx={{
          background: "linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        WebGuide
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom color="text.primary">
        Your AI Guide for the Web
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 2 }}>
        Navigate any website and achieve your goals{" "}
        <strong>without taking control away from you</strong>.
      </Typography>
    </Box>
  );
}
