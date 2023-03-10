import { Box, Typography } from "@mui/material";
import React from "react";
import { Splash } from "~/components";

const NotFound: React.FC = () => {
  return (
    <>
      <Splash>
        <Box>
          <Typography variant="h3" align="center">
            Pagina non trovata!
          </Typography>
        </Box>
      </Splash>
    </>
  );
};

export default NotFound;
