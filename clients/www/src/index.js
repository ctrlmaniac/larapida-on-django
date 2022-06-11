import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";
import App from "App";
import Layout from "Layout";
import { store } from "state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <Layout>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </Layout>
  </ReduxProvider>
);
