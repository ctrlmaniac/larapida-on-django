import React from "react";
import { LoadingSkeleton } from "Components";
import { useAppSelector } from "hooks";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const Servizi: React.FC = () => {
  const categorie = useAppSelector((state) => state.categorie);
  const navigate = useNavigate();

  if (categorie.listing) {
    return (
      <Container>
        <LoadingSkeleton />
      </Container>
    );
  } else {
    if (categorie.listError) {
      return (
        <Container maxWidth="sm" sx={{ mb: 6 }}>
          <Alert severity="error">C'è stato un problema...</Alert>
        </Container>
      );
    } else {
      if (categorie.list.length === 0) {
        return (
          <Container maxWidth="sm" sx={{ textAlign: "center", pb: 6 }}>
            <Typography>
              Non ci sono ancora servizi. Torna più tardi o prova a contattarci!
            </Typography>
          </Container>
        );
      } else {
        return (
          <Container>
            <Box sx={{ mb: 6 }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
              >
                {categorie.list.map((cat) => {
                  if (!cat.sito) {
                    return null;
                  } else {
                    const wallpaper = function (wallpaper: string) {
                      var splitted = wallpaper.split(".");

                      if (splitted.length === 2) {
                        return splitted[0] + "-thumbnail.webp";
                      }
                      return (
                        splitted[0] + "." + splitted[1] + "-thumbnail.webp"
                      );
                    };
                    return (
                      <Grid key={cat.id} item xs={12} sm={6} md={4}>
                        <Card
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#FFFFFF",
                          }}
                        >
                          {cat.wallpaper && (
                            <CardMedia
                              component="img"
                              height="140"
                              image={wallpaper(cat.wallpaper)}
                              alt={cat.nome}
                            />
                          )}
                          <CardContent sx={{ flex: "1 0 auto" }}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {cat.nome}
                            </Typography>
                            <Typography>{cat.descrizione_breve}</Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              fullWidth
                              onClick={() => navigate(cat.url || "/")}
                            >
                              Scopri di più
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </Box>
          </Container>
        );
      }
    }
  }
};

export default Servizi;
