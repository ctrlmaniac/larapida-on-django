import { Box, CircularProgress, Typography } from "@mui/material";
import { filter } from "lodash";
import React from "react";

export default function Servizi({ lista }) {
  if (lista.getting) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  } else {
    const servizi = filter(lista.list, (pr) => pr.servizio === true);

    if (servizi.length === 0) {
      return null;
    } else {
      return (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6">Cosa facciamo</Typography>
        </Box>
      );
    }
  }
}
