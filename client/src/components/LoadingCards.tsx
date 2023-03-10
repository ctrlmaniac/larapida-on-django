import React from "react";
import { Grid, Skeleton } from "@mui/material";

const LoadingCards: React.FC = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12} sm={4}>
        <Skeleton sx={{ height: 100 }} />
      </Grid>

      <Grid item xs={12} sm={4}>
        <Skeleton sx={{ height: 100 }} />
      </Grid>

      <Grid item xs={12} sm={4}>
        <Skeleton sx={{ height: 100 }} />
      </Grid>
    </Grid>
  );
};

export default LoadingCards;
