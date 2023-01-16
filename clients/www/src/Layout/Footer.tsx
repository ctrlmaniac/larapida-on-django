import React from "react";
import { useAppSelector } from "~/hooks";
import { useNavigate } from "react-router-dom";
import {
  ListItemText,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Grid,
} from "@mui/material";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconHome,
  IconMail,
  IconShield,
} from "@tabler/icons";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const categorie = useAppSelector((state) => state.categorie);
  const orari = useAppSelector((state) => state.negozioOrari);
  const orariSpeciali = useAppSelector((state) => state.negozioOrariSpeciali);

  const giorni = [
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
    "Domenica",
  ];

  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "#79736c", pt: 3, pb: 3 }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography
              variant="h1"
              component="h6"
              sx={{ fontFamily: "'Mrs Sheppards', cursive;" }}
            >
              La Rapida
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" component="p" gutterBottom>
              Seguici sui social
            </Typography>

            <IconButton
              color="primary"
              sx={{ mr: 2 }}
              onClick={() =>
                window.open("https://facebook.com/larapidamolinetto", "_blank")
              }
            >
              <IconBrandFacebook />
            </IconButton>

            <IconButton
              color="primary"
              sx={{ mr: 2 }}
              onClick={() =>
                window.open("https://facebook.com/larapidamolinetto", "_blank")
              }
            >
              <IconBrandInstagram />
            </IconButton>
          </Box>

          <Box sx={{ mt: 6, mb: 3 }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={3}
            >
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" gutterBottom>
                  Link Utili
                </Typography>

                <List>
                  <ListItemButton onClick={() => navigate("/")}>
                    <ListItemIcon>
                      <IconHome />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>

                  <ListItemButton onClick={() => navigate("/contatti")}>
                    <ListItemIcon>
                      <IconMail />
                    </ListItemIcon>
                    <ListItemText primary="Contatti" />
                  </ListItemButton>

                  <ListItemButton onClick={() => navigate("/privacy")}>
                    <ListItemIcon>
                      <IconShield />
                    </ListItemIcon>
                    <ListItemText primary="Privacy" />
                  </ListItemButton>
                </List>
              </Grid>

              {categorie.list.length > 0 && (
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h6" gutterBottom>
                    Servizi
                  </Typography>

                  <List>
                    {categorie.list.map((c, i) => (
                      <ListItemButton
                        key={i}
                        onClick={() => navigate(`/${c.url}`)}
                      >
                        <ListItemText primary={c.nome} />
                      </ListItemButton>
                    ))}
                  </List>
                </Grid>
              )}
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={3}
            >
              {orari.list.length > 0 && (
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h6" gutterBottom>
                    Orari
                  </Typography>

                  <List>
                    {orari.list.map((o) => {
                      return (
                        <ListItem key={o.id}>
                          {giorni[parseInt(o.giorno!) - 1]} dalle{" "}
                          {o.dalle?.substring(0, 5)} alle{" "}
                          {o.alle?.substring(0, 5)}
                        </ListItem>
                      );
                    })}
                  </List>
                </Grid>
              )}

              {orariSpeciali.list.length > 0 && (
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h6" gutterBottom>
                    Orari Speciali
                  </Typography>

                  <List>
                    {orariSpeciali.list.map((o) => {
                      if (o.aperto) {
                        return (
                          <ListItem key={o.id}>
                            {o.giorno} dalle {o.dalle?.substring(0, 5)} alle{" "}
                            {o.alle?.substring(0, 5)}
                          </ListItem>
                        );
                      } else {
                        return (
                          <ListItem key={o.id}>{o.giorno} chiuso</ListItem>
                        );
                      }
                    })}
                  </List>
                </Grid>
              )}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          p: 4,
          textAlign: "center",
          color: "#F2E5D7",
          backgroundColor: "#3d3936",
        }}
      >
        <Typography variant="body2">
          <b>La Rapida di Davide Di Criscito</b>
          <br />
          Via De Gasperi, 6, 25080 Molinetto di Mazzano
          <br />
          presso il Centro Commerciale Molinetto
          <br />
          C.F.: DCR DVD 90E23 B157 R - P.IVA: 03792670980
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
