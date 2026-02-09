import { Box, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MapIcon from "@mui/icons-material/Map";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SecurityIcon from "@mui/icons-material/Security";
import Feature from "./Feature";

export default function KeyFeaturesSection() {
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
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </Box>
    </Box>
  );
}
