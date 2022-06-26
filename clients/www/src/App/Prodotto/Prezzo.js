import React from "react";
import { Typography } from "@mui/material";

export default function Prezzo({ prodotto }) {
  if (prodotto.prezzo) {
    let price = parseFloat(prodotto.prezzo).toFixed(2);

    return (
      <Typography variant="h6" component="p">
        Prezzo{prodotto.prezzo_a_partire && " a partire da"}{" "}
        {prodotto.prezzo_offerta ? (
          <span>
            <s>{price}</s> {prodotto.prezzo_offerta}
          </span>
        ) : (
          prodotto.prezzo
        )}{" "}
        €
      </Typography>
    );
  } else {
    return <Typography>Prezzo non specificato</Typography>;
  }
}
