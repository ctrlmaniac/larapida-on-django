import { ButtonBase, Card, CardContent, Typography, Box } from "@mui/material";
import React from "react";

export default function ProdottoWidget({ prodotto }) {
  return (
    <Card sx={{ display: "flex" }}>
      <ButtonBase sx={{ width: "100% !important" }}>
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
