import React from "react";
import { Alert } from "@mui/material";
import Splash from "./Splash";

export default function ErrorScreen({ children }) {
  return (
    <Splash>
      <Alert severity="error">{children}</Alert>
    </Splash>
  );
}
