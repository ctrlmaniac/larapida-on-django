import { Typography, Container } from "@mui/material";
import { Header, Page } from "Components";
import React from "react";
import ReactMarkdown from "react-markdown";
import Prezzo from "../Prezzo";
import Immagini from "./Immagini";
import Varianti from "./Varianti";

export default function Dettagli({ prodotto }) {
  return (
    <Page>
      <Header>
        <Typography variant="h3" gutterBottom>
          {prodotto.nome}
        </Typography>
        <Typography gutterBottom>{prodotto.descrizione_breve}</Typography>
        <Prezzo prodotto={prodotto} />
      </Header>

      {prodotto.immagini.length > 0 && (
        <Immagini immagini={prodotto.immagini} />
      )}

      {prodotto.varianti.length > 0 && (
        <Varianti varianti={prodotto.varianti} />
      )}

      {prodotto.descrizione && (
        <Container>
          <ReactMarkdown>{prodotto.descrizione}</ReactMarkdown>
        </Container>
      )}
    </Page>
  );
}
