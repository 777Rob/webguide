"use client";

import * as React from "react";
import {
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Stack,
  Paper,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MapIcon from "@mui/icons-material/Map";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SecurityIcon from "@mui/icons-material/Security";

export default function Home() {
  const theme = useTheme();

  const features = [
    {
      title: "Visual Understanding",
      description:
        "Uses Gemini 3.0 Flash to analyze your active tab. It understands layouts, menus, and context just like a human does.",
      icon: <VisibilityIcon fontSize="large" color="primary" />,
    },
    {
      title: "Contextual Guidance",
      description:
        "Tracks your progress across multiple pages. It knows when you've finished a step and automatically updates the plan.",
      icon: <MapIcon fontSize="large" color="primary" />,
    },
    {
      title: "Natural Voice",
      description:
        'Speaks instructions to you, so you can keep your eyes on the page (with a convenient "Pause Agent" button when you need quiet).',
      icon: <RecordVoiceOverIcon fontSize="large" color="primary" />,
    },
    {
      title: "User Agency",
      description:
        "You perform the actions. This ensures 100% accuracy and trust, especially for sensitive inputs like logins or payments.",
      icon: <FlashOnIcon fontSize="large" color="primary" />,
    },
    {
      title: "Privacy-First Design",
      description:
        "All processing happens locally or directly via your browser. Extension sends requests directly to Google's Gemini API using the key you provide with no third-party in between.",
      icon: <SecurityIcon fontSize="large" color="primary" />,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack spacing={8} alignItems="center">
        {/* Video Section */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            position: "relative",
            paddingTop: "56.25%", // 16:9 Aspect Ratio
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

        {/* Hero Section */}
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
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            color="text.primary"
          >
            Your AI Guide for the Web
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            paragraph
            sx={{ mb: 4 }}
          >
            Navigate any website and achieve your goals{" "}
            <strong>without taking control away from you</strong>.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            href="/extension.zip"
            download="WebGuide_Extension.zip"
            sx={{ px: 5, py: 2, fontSize: "1.25rem", borderRadius: 2 }}
          >
            Download Extension
          </Button>
        </Box>

        {/* Philosophy Section */}
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
            <strong>you</strong> are the best operator of your browser. The
            websites you use were designed for humans, and often the most
            intuitive way to fill out a form or select an option is to simply
            click it yourself.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            fontSize="1.1rem"
            color="text.secondary"
          >
            WebGuide acts as an intelligent companion sitting next to you. It
            sees what you see, understands your goal, and provides:
          </Typography>
          <Stack
            spacing={1}
            sx={{
              pl: 4,
              borderLeft: `4px solid ${theme.palette.primary.main}`,
              mb: 4,
            }}
          >
            <Typography variant="body1" fontSize="1.1rem">
              <strong>Visual Cues</strong>: Highlights exactly where to look.
            </Typography>
            <Typography variant="body1" fontSize="1.1rem">
              <strong>Spoken Instructions</strong>: Tells you naturally what to
              do next.
            </Typography>
            <Typography variant="body1" fontSize="1.1rem">
              <strong>Step-by-Step Plans</strong>: Breaks down complex tasks
              into manageable actions.
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            fontSize="1.1rem"
            color="text.secondary"
            textAlign="center"
            fontStyle="italic"
          >
            It doesn&apos;t try to be the captain; it&apos;s the navigator. You
            stay in the driver&apos;s seat.
          </Typography>
        </Box>

        {/* Key Features Section */}
        <Box width="100%">
          <Typography
            variant="h3"
            gutterBottom
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 6 }}
          >
            Key Features
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
            }}
          >
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{ width: { xs: "100%", md: "30%" }, minWidth: 280 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    transition: "transform 0.2s",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                  elevation={3}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                    <Box
                      sx={{ mb: 2, display: "flex", justifyContent: "center" }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      fontWeight="bold"
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Installation Instructions */}
        <Box width="100%" maxWidth="800px">
          <Typography
            variant="h4"
            gutterBottom
            sx={{ mb: 3 }}
            textAlign="center"
          >
            Installation Instructions
          </Typography>

          <Paper elevation={0} sx={{ bgcolor: "transparent" }}>
            <Stack spacing={2}>
              <Accordion defaultExpanded sx={{ bgcolor: "background.paper" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">Step 1: Download & Unzip</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Download the <code>extension.zip</code> file using the
                    button above. Extract the contents to a folder on your
                    computer.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ bgcolor: "background.paper" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">
                    Step 2: Open Chrome Extensions
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Open Google Chrome and navigate to{" "}
                    <code>chrome://extensions</code> in the address bar.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ bgcolor: "background.paper" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">
                    Step 3: Enable Developer Mode
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    In the top right corner of the Extensions page, toggle the
                    switch for <strong>Developer mode</strong> to turn it on.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ bgcolor: "background.paper" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">
                    Step 4: Load Unpacked Extension
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Click the <strong>Load unpacked</strong> button that appears
                    in the top left. Select the folder you extracted in Step 1.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Container>
  );
}
