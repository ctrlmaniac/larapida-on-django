import { Typography } from "@mui/material";
import { Header, Page } from "Components";
import React from "react";
import Prezzo from "./Prezzo";

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
    </Page>
  );
}
