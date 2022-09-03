import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NavigationScroll } from "./Components";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import { store } from "store";
import Layout from "Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
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

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <NavigationScroll>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <App />
            </Layout>
          </ThemeProvider>
        </NavigationScroll>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
