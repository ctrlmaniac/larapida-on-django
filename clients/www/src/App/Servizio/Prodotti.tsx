import { Box, Grid, Typography } from "@mui/material";
import ProdottoWidget from "App/Prodotto/Widget";
import { useAppSelector } from "hooks";
import { filter } from "lodash";
import React from "react";

const Prodotti: React.FC = () => {
  const { list } = useAppSelector((state) => state.prodotti);
  const prodotti = filter(
    list,
    (pr) => pr.servizio === false && pr.resourcetype === "Prodotto"
  );

  if (list.length === 0) {
    return null;
  } else {
    if (prodotti.length === 0) {
      return null;
    } else {
      return (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 6 }}>
            Cosa Vendiamo
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
};

export default Prodotti;
