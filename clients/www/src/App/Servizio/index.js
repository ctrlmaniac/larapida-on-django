import React from "react";
import { isEmpty, find } from "lodash";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ErrorScreen, Header, LoadingScreen, Jumbotron } from "Components";
import { Typography } from "@mui/material";
import NotFound from "App/NotFound";

export default function Servizio() {
  let { servizio } = useParams();
  let { categorie } = useSelector((state) => state.magazzino);

  if (categorie.getting) {
    return <LoadingScreen />;
  } else {
    if (categorie.getError) {
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
            return (
              <React.Fragment>
                <Header>
                  <Typography variant="h2" component="h1" gutterBottom>
                    {categoria.nome}
                  </Typography>

                  <Typography variant="subtitle1">
                    {categoria.descrizione_breve}
                  </Typography>
                </Header>

                {categoria.wallpaper && (
                  <Jumbotron image={categoria.wallpaper} />
                )}
              </React.Fragment>
            );
          }
        }
      }
    }
  }
}
