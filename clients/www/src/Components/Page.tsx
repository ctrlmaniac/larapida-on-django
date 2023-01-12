import React from "react";
import { Box } from "@mui/material";

interface Props {
  children: JSX.Element[] | JSX.Element | string;
}

const Page: React.FC<Props> = (props) => {
  return <Box sx={{ minHeight: "90vh", pb: "56px" }}>{props.children}</Box>;
};

export default Page;
