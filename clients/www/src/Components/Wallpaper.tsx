import React from "react";
import { Box } from "@mui/material";

interface Props {
  image: string;
  children: JSX.Element;
}

const Wallpaper: React.FC<Props> = (props) => {
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
};

export default Wallpaper;
