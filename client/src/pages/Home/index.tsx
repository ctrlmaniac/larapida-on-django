import React from "react";
import { Splash, Wallpaper } from "~/components";
import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import main from "~/assets/wallpapers/main.webp";
import { logoTheme } from "~/components/theme";
import { useAppSelector } from "~/hooks";
import Categories from "./Categories";

const Home: React.FC = () => {
  const { details } = useAppSelector((state) => state.businessPrincipal);

  return (
    <>
      <Wallpaper image={main}>
        <Box sx={{ background: "rgba(0,0,0,0.2)" }}>
          <Splash>
            <Container>
              <ThemeProvider theme={logoTheme}>
                <Typography
                  variant="h1"
                  align="center"
                  color="white"
                  gutterBottom
                >
                  {details?.display_name}
                </Typography>
              </ThemeProvider>
              <Typography variant="h6" color="white">
                L'artigiano, calzolaio, nel cuore del Centro Commerciale
                Molinetto.
              </Typography>

              <Box mt={2}>
                <Button variant="contained" href="#servizi">
                  Scopri tutti i nostri servizi
                </Button>
              </Box>
            </Container>
          </Splash>
        </Box>
      </Wallpaper>

      <div id="servizi">
        <Box my={6}>
          <Categories />
        </Box>
      </div>
    </>
  );
};

export default Home;
