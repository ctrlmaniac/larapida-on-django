import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Privacy: React.FC = () => {
  return (
    <Container>
      <Box mt={16}>
        <Box mb={3}>
          <Typography variant="h3">Privacy</Typography>
          <Typography>
            Tutti i tuoi dati sono al sicuro poiché noi non li collezioniamo!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Privacy;
