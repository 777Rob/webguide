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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Stack spacing={6} alignItems="center">
        {/* Video Section */}
        <Box
          sx={{
            width: "100%",
            position: "relative",
            paddingTop: "56.25%", // 16:9 Aspect Ratio
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
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
        <Box textAlign="center">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            WebGuide
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Your intelligent compass for navigating the web.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            href="/extension.zip"
            download="extension.zip"
            sx={{ mt: 2, px: 4, py: 1.5, fontSize: "1.2rem" }}
          >
            Download Extension
          </Button>
        </Box>

        {/* Installation Instructions */}
        <Box width="100%">
          <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
            Installation Instructions
          </Typography>

          <Paper
            elevation={0}
            sx={{ bgcolor: "background.paper", borderRadius: 1 }}
          >
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Step 1: Download & Unzip</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Download the <code>extension.zip</code> file using the button
                  above. Extract the contents to a folder on your computer. You
                  should see a folder containing files like{" "}
                  <code>manifest.json</code>.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
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

            <Accordion>
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

            <Accordion>
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
          </Paper>
        </Box>
      </Stack>
    </Container>
  );
}
