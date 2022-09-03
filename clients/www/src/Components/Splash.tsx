import React from "react";
import { Box } from "@mui/material";

interface Props {
  children: JSX.Element | null;
}

const Splash: React.FC<Props> = (props) => {
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
      {props.children || null}
    </Box>
  );
};

export default Splash;
