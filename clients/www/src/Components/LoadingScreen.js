import React from "react";
import { CircularProgress } from "@mui/material";
import Splash from "./Splash";

export default function LoadingScreen() {
  return (
    <Splash>
      <CircularProgress />
    </Splash>
  );
}
