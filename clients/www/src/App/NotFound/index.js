import { Button, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Page>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <img
            alt="pagina non trovata"
            src={process.env.PUBLIC_URL + "/animations/not-found.gif"}
            style={{ maxWidth: "100%" }}
            width={450}
            height="auto"
          />
          <Typography variant="h6">Qui non c'è niente!</Typography>
          <Typography gutterBottom>
            La pagina che stavi cercando non esiste!
          </Typography>
          <Button variant="contained" onClick={() => navigate(-1)}>
            Torna indietro
          </Button>
        </Box>
      </Container>
    </Page>
  );
}
