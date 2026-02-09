import { Box, Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function Feature({ title, description, icon }: FeatureProps) {
  return (
    <Box sx={{ width: { xs: "100%", md: "30%" }, minWidth: 280 }}>
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
          <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
            {icon}
          </Box>
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            fontWeight="bold"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
