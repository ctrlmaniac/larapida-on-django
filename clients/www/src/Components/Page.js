import React from "react";
import { Box } from "@mui/material";

export default function Page({ children }) {
  return <Box sx={{ minHeight: "90vh", pb: "56px" }}>{children}</Box>;
}
