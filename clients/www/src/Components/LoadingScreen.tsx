import React from "react";
import { CircularProgress } from "@mui/material";
import Splash from "./Splash";

const LoadingScreen: React.FC = () => {
  return (
    <Splash>
      <CircularProgress />
    </Splash>
  );
};

export default LoadingScreen;
