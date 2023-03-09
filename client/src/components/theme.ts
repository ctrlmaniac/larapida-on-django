import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    background: {
      default: "#f5f3f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#262322",
    },
    primary: {
      main: "#244229",
    },
  },
});

export const logoTheme = createTheme({
  typography: {
    fontFamily: ["Mrs Sheppards", "cursive"].join(","),
  },
});
