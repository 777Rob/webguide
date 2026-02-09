import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function InstallationInstructions() {
  return (
    <Box width="100%" maxWidth="800px">
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }} textAlign="center">
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
                Download the <code>extension.zip</code> file using the button
                above. Extract the contents to a folder on your computer.
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
                Click the <strong>Load unpacked</strong> button that appears in
                the top left. Select the folder you extracted in Step 1.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Paper>
    </Box>
  );
}
