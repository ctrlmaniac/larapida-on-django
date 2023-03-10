import React from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  IconButton,
  Box,
  ThemeProvider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import {
  IconBrandAbstract,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconMenu2,
} from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import get from "~/features/business/principal/get";
import { LoadingScreen, NavigationScroll, Splash } from "~/components";
import Sidebar from "./Sidebar";
import list from "~/features/categories/list";
import listStores from "~/features/stores/list";
import { darkTheme, logoTheme } from "~/components/theme";
import { isEmpty } from "lodash";

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
    list: categories,
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
        <NavigationScroll>
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
                src="/static/client/logo.png"
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

          <Box sx={{ minHeight: "100vh" }}>
            <Outlet />
          </Box>

          <Box
            sx={{ backgroundColor: "#0d1b1e", color: "#f5f3f4" }}
            py={3}
            mt={6}
          >
            <Container>
              <ThemeProvider theme={logoTheme}>
                <Typography
                  variant="h1"
                  component="h3"
                  align="center"
                  gutterBottom
                >
                  La Rapida
                </Typography>
              </ThemeProvider>

              {!isEmpty(details?.socials) && (
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6">Seguici sui social</Typography>
                  {details?.socials.map((social, i) => {
                    let icon = <IconBrandAbstract />;
                    let content = social.content;

                    switch (social.social) {
                      case "FACEBOOK":
                        icon = <IconBrandFacebook />;
                        break;

                      case "INSTAGRAM":
                        icon = <IconBrandInstagram />;
                        break;

                      case "TIKTOK":
                        icon = <IconBrandTiktok />;
                        break;

                      case "WHATSAPP":
                        icon = <IconBrandWhatsapp />;
                        content = "/contatti";
                        break;
                    }

                    return (
                      <IconButton
                        key={i}
                        color="secondary"
                        onClick={() => window.open(content, "_blank")}
                      >
                        {icon}
                      </IconButton>
                    );
                  })}
                </Box>
              )}

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Link utili</Typography>
                  <List>
                    <ListItemButton onClick={() => navigate("/")}>
                      <ListItemText primary="Home" />
                    </ListItemButton>

                    <ListItemButton onClick={() => navigate("/contatti")}>
                      <ListItemText primary="Contatti" />
                    </ListItemButton>

                    <ListItemButton onClick={() => navigate("/privacy")}>
                      <ListItemText primary="Privacy" />
                    </ListItemButton>
                  </List>
                </Grid>

                {!isEmpty(categories) && (
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Servizi</Typography>
                    <List>
                      {categories!.map((category) => (
                        <ListItemButton
                          key={category.id}
                          onClick={() => navigate("/" + category.url)}
                        >
                          <ListItemText primary={category.name} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Grid>
                )}
              </Grid>
            </Container>
          </Box>
        </NavigationScroll>
      );
    }
  }
};

export default Root;
