import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import App from "./App";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { NavigationScroll } from "./Components";
import Layout from "./Layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
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
