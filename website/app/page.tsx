"use client";

import { Container, Stack } from "@mui/material";
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";
import PhilosophySection from "../components/PhilosophySection";
import KeyFeaturesSection from "../components/KeyFeaturesSection";
import DownloadSection from "../components/DownloadSection";
import InstallationInstructions from "../components/InstallationInstructions";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack spacing={10} alignItems="center">
        <HeroSection />
        <VideoSection />
        <PhilosophySection />
        <KeyFeaturesSection />
        <DownloadSection />
        <InstallationInstructions />
      </Stack>
    </Container>
  );
}
