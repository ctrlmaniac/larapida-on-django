import {
  ButtonBase,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
} from "@mui/material";
import { find } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProdottoWidget({ prodotto }) {
  const navigate = useNavigate();

  let thumbnail = null;
  if (prodotto.hasOwnProperty("immagini")) {
    if (prodotto.immagini.length > 0) {
      thumbnail = find(prodotto.immagini, (i) => i.thumbnail === true);
    }
  }

  return (
    <Card sx={{ display: "flex" }}>
      <ButtonBase
        sx={{ width: "100% !important" }}
        onClick={
          prodotto.url
            ? () => navigate("/" + prodotto.url)
            : () => navigate("#")
        }
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Typography>
              <b>{prodotto.nome}</b>
            </Typography>
            <Typography variant="body2">
              {prodotto.prezzo + " €" || "prezzo non specificato"}
            </Typography>
            <Typography variant="caption">
              {prodotto.descrizione_breve}
            </Typography>
          </CardContent>

          {thumbnail && (
            <CardMedia
              sx={{ width: 150 }}
              component="img"
              image={thumbnail.file}
            />
          )}
        </Box>
      </ButtonBase>
    </Card>
  );
}
