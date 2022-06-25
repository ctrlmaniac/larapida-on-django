import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import ProdottoWidget from "App/Prodotto/Widget";
import { filter } from "lodash";
import React from "react";

export default function Servizi({
  lista,
  servizio = false,
  message = "Cosa vendiamo",
}) {
  if (lista.getting) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  } else {
    const prodotti = filter(lista.list, (pr) => pr.servizio === servizio);

    if (prodotti.length === 0) {
      return null;
    } else {
      return (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 6 }}>
            {message}
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            {prodotti.map((pr, i) => {
              return (
                <Grid key={i} item xs={12} sm={6} lg={4}>
                  <ProdottoWidget prodotto={pr} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      );
    }
  }
}
