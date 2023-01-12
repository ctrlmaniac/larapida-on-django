import React from "react";
import { Box } from "@mui/material";

interface Props {
  image: string;
  height?: string | number;
  children?: JSX.Element[] | JSX.Element;
}

const Jumbotron: React.FC<Props> = ({
  image,
  height = "45vh",
  children,
  ...rest
}) => {
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
};

export default Jumbotron;
