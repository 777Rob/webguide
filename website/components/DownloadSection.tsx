import { Box, Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export default function DownloadSection() {
  return (
    <Box textAlign="center" maxWidth="800px">
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Download now
      </Typography>
      <Button
        variant="contained"
        size="large"
        startIcon={<DownloadIcon />}
        href="/extension.zip"
        download="WebGuide_Extension.zip"
        sx={{ px: 6, py: 2, fontSize: "1.3rem", borderRadius: 2, mt: 2 }}
      >
        Download Extension
      </Button>
    </Box>
  );
}
