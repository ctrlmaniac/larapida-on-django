import React from "react";
import { Button, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Page } from "~/Components";
import AnimationNotFound from "~/assets/animations/not-found.gif";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <img
            alt="pagina non trovata"
            src={AnimationNotFound}
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
};

export default NotFound;
