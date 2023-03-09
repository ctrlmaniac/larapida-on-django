import React from "react";
import { Box } from "@mui/material";

interface Props {
  children: JSX.Element | null;
  position?: string;
}

const Splash: React.FC<Props> = ({ children, position = "relative" }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        top: 0,
        right: 0,
        left: 0,
        position: position,
      }}
    >
      {children || null}
    </Box>
  );
};

export default Splash;
