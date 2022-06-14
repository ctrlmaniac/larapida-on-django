import React from "react";
import { Box } from "@mui/material";

export default function ErrorScreen({ children }) {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {children || null}
    </Box>
  );
}
