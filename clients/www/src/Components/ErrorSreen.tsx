import React from "react";
import { Alert } from "@mui/material";
import Splash from "./Splash";

interface Props {
  children: JSX.Element | string;
}

const ErrorScreen: React.FC<Props> = (props) => {
  return (
    <Splash>
      <Alert severity="error">{props.children}</Alert>
    </Splash>
  );
};

export default ErrorScreen;
