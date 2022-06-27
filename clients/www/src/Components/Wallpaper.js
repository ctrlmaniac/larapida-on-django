import React from "react";
import { Box } from "@mui/material";

export default function Wallpaper(props) {
  let wallpaper = props.image;

  return (
    <Box
      sx={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {props.children}
    </Box>
  );
}
