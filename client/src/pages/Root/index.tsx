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
import Sidebar from "./Sidebar";
import list from "~/features/categories/list";
import listStores from "~/features/stores/list";

const Root: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const { getting, getError, details, response } = useAppSelector(
    (state) => state.businessPrincipal
  );
  const {
    listing,
    listError,
    response: categoryResponse,
  } = useAppSelector((state) => state.categories);
  const {
    listing: storelisting,
    listError: storelisterror,
    response: storeresponse,
  } = useAppSelector((state) => state.stores);

  React.useEffect(() => {
    dispatch(get());
    dispatch(list());
    dispatch(listStores());
  }, []);

  if (getting || listing || storelisting) {
    return <LoadingScreen />;
  } else {
    if (getError || listError || storelisterror) {
      return (
        <Splash>
          <Box>
            <Typography variant="h3">La Rapida Molinetto</Typography>
            <Typography>"Errore di caricamento, riprova più tardi!"</Typography>
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
            }}
          >
            <Toolbar sx={{ paddingLeft: "0 !important" }}>
              <Avatar
                onClick={() => navigate("/")}
                src="/static/www/logo.png"
                alt={details?.display_name}
                sx={{
                  width: 64,
                  height: 64,
                  marginRight: 2,
                  cursor: "pointer",
                }}
              />
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {details?.display_name}
              </Typography>
              <IconButton color="primary" onClick={() => setOpen(true)}>
                <IconMenu2 />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Sidebar open={open} onClose={setOpen} />

          <Outlet />
        </>
      );
    }
  }
};

export default Root;
