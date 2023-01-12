import React from "react";
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import Servizi from "./Servizi";
import moodWallpaper from "~/assets/wallpapers/mood.jpg";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          height: "100vh",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url('${moodWallpaper}')`,
        }}
      >
        <Container maxWidth="md">
          <Paper sx={{ p: 3 }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{ fontFamily: "'Mrs Sheppards', cursive;" }}
            >
              La Rapida
            </Typography>

            <Typography variant="h6" component="p" sx={{ mb: 4 }}>
              L'artigiano, calzolaio, nel cuore del Centro Commerciale
              Molinetto.
            </Typography>

            <Button variant="contained" href="#servizi">
              Scopri tutti i nostri servizi
            </Button>
          </Paper>
        </Container>
      </Box>

      <div id="servizi">
        <Box sx={{ pt: 8 }}>
          <Servizi />
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Home;
