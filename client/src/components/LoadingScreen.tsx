import React from "react";
import Splash from "./Splash";
import { CircularProgress } from "@mui/material";

const LoadingScreen: React.FC = () => {
  return (
    <Splash position="fixed">
      <CircularProgress />
    </Splash>
  );
};

export default LoadingScreen;
