import React from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  CssBaseline,
  Typography,
  ThemeProvider,
  IconButton,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons-react";
import { defaultTheme } from "../theme";

const Layout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        sx={{
          borderRadius: "20em",
          top: "4px",
          right: "8px",
          left: "8px",
          width: "calc(100% - 16px)",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <Toolbar sx={{ paddingLeft: "0 !important" }}>
          <Avatar
            src="/static/www/logo.png"
            alt="La Rapida"
            sx={{ width: 64, height: 64, marginRight: 2 }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            La Rapida
          </Typography>
          <IconButton color="primary">
            <IconMenu2 />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
