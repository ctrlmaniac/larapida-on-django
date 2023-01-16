import { Box, Grid, Typography } from "@mui/material";
import { Prodotto } from "~/models";
import React from "react";
import ProdottoWidget from "../Widget";

interface Props {
  varianti: Prodotto[];
}

const Varianti: React.FC<Props> = ({ varianti }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        Varianti
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {varianti.map((v, i) => {
          return (
            <Grid key={i} item xs={12} sm={6} lg={4}>
              <ProdottoWidget prodotto={v} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Varianti;

