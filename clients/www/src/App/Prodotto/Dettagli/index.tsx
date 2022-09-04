import { Typography, Container } from "@mui/material";
import { Header, Page } from "Components";
import { Prodotto } from "models";
import React from "react";
import ReactMarkdown from "react-markdown";
import Prezzo from "../Prezzo";
import Immagini from "./Immagini";
import Varianti from "./Varianti";

interface Props {
  prodotto: Prodotto;
}

const Dettagli: React.FC<Props> = ({ prodotto }) => {
  const ProdottoImmagini: React.FC = () => {
    if (prodotto.immagini) {
      if (prodotto.immagini.length > 0) {
        return <Immagini immagini={prodotto.immagini} />;
      }
    }

    return null;
  };

  const ProdottoVarianti: React.FC = () => {
    if (prodotto.varianti) {
      if (prodotto.varianti.length > 0) {
        return <Varianti varianti={prodotto.varianti} />;
      }
    }

    return null;
  };

  const ProdottoDescrizione: React.FC = () => {
    if (prodotto.descrizione) {
      return (
        <Container maxWidth="md">
          <ReactMarkdown>{prodotto.descrizione}</ReactMarkdown>
        </Container>
      );
    }

    return null;
  };

  return (
    <Page>
      <Header>
        <Typography variant="h3" gutterBottom>
          {prodotto.nome}
        </Typography>
        <Typography gutterBottom>{prodotto.descrizione_breve}</Typography>
        <Prezzo prodotto={prodotto} />
      </Header>

      <ProdottoImmagini />

      <ProdottoVarianti />

      <ProdottoDescrizione />
    </Page>
  );
};

export default Dettagli;

