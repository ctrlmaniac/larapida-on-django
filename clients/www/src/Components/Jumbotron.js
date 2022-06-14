import React from "react";
import { Box } from "@mui/material";

export default function Jumbotron({
  image,
  height = "45vh",
  children,
  ...rest
}) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: height,
        marginBottom: 6,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
