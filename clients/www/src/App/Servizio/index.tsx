import React from "react";
import { isEmpty, find } from "lodash";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks";
import list from "features/prodotti/list";
import {
  ErrorScreen,
  Header,
  LoadingScreen,
  Jumbotron,
  Page,
} from "Components";
import NotFound from "App/NotFound";
import Servizi from "./Servizi";
import Prodotti from "./Prodotti";

const Servizio: React.FC = () => {
  const dispatch = useAppDispatch();
  const { servizio } = useParams();
  const categorie = useAppSelector((state) => state.categorie);
  const prodotti = useAppSelector((state) => state.prodotti);

  React.useEffect(() => {
    let categoria = find(categorie.list, function (o) {
      return o.url === servizio;
    });

    if (!isEmpty(categoria)) {
      dispatch(list({ categoria: categoria?.id, sito: "true" }));
    }
  }, [servizio, categorie, dispatch]);

  if (categorie.listing && prodotti.getting) {
    return <LoadingScreen />;
  } else {
    if (categorie.listError) {
      return (
        <ErrorScreen>
          Impossibile recuperare il servizio richiesto! Riprova più tardi
        </ErrorScreen>
      );
    } else {
      if (!Array.isArray(categorie.list)) {
        return <ErrorScreen>C'è stato un problema...</ErrorScreen>;
      } else {
        if (isEmpty(categorie.list)) {
          return <ErrorScreen>C'è stato un problema...</ErrorScreen>;
        } else {
          let categoria = find(categorie.list, function (o) {
            return o.url === servizio;
          });

          if (categoria === undefined) {
            return <NotFound />;
          } else {
            const Wallpaper = () => {
              if (categoria?.wallpaper) {
                return <Jumbotron image={categoria?.wallpaper} />;
              } else {
                return null;
              }
            };

            const Descrizione = () => {
              if (categoria?.descrizione) {
                return (
                  <Container maxWidth="md">
                    <Box sx={{ mb: 3 }}>
                      <Typography>{categoria?.descrizione}</Typography>
                    </Box>
                  </Container>
                );
              } else {
                return null;
              }
            };

            return (
              <Page>
                <Header>
                  <Typography variant="h2" component="h1" gutterBottom>
                    {categoria.nome}
                  </Typography>

                  <Typography variant="subtitle1">
                    {categoria.descrizione_breve}
                  </Typography>
                </Header>

                <Wallpaper />

                <Descrizione />

                <Servizi />
                <Prodotti />
              </Page>
            );
          }
        }
      }
    }
  }
};

export default Servizio;
