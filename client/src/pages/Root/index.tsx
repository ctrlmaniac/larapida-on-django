import React from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import get from "~/features/business/principal/get";
import { LoadingScreen, Splash } from "~/components";
import { isEmpty } from "lodash";

const Root: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { getting, getError, details } = useAppSelector(
    (state) => state.businessPrincipal
  );

  React.useEffect(() => {
    dispatch(get());
  }, []);

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (!isEmpty(getError)) {
      return (
        <Splash>
          <Box>
            <Typography variant="h3">La Rapida Molinetto</Typography>
            <Typography>{getError}</Typography>
          </Box>
        </Splash>
      );
    } else {
      return (
        <>
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
                alt={details?.display_name}
                sx={{ width: 64, height: 64, marginRight: 2 }}
              />
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {details?.display_name}
              </Typography>
              <IconButton color="primary">
                <IconMenu2 />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Outlet />
        </>
      );
    }
  }
};

export default Root;
