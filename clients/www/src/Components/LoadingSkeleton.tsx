import React from "react";
import { Grid, Skeleton } from "@mui/material";

const LoadingSkeleton: React.FC = () => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4}>
          <Skeleton variant="rectangular" height={50} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </Grid>

        <Grid item xs={4}>
          <Skeleton variant="rectangular" height={50} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </Grid>

        <Grid item xs={4}>
          <Skeleton variant="rectangular" height={50} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default LoadingSkeleton;
