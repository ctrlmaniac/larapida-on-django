import { ButtonBase, Card, CardContent, Typography, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProdottoWidget({ prodotto }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ display: "flex" }}>
      <ButtonBase
        sx={{ width: "100% !important" }}
        onClick={() => navigate("/" + prodotto.url)}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography>
              <b>{prodotto.nome}</b>
            </Typography>
            <Typography variant="body2">
              {prodotto.prezzo || "prezzo non specificato"}
            </Typography>
            <Typography variant="caption">
              {prodotto.descrizione_breve}
            </Typography>
          </CardContent>
        </Box>
      </ButtonBase>
    </Card>
  );
}
