import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import {
  Skeleton,
  Grid,
  Alert,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box,
} from "@mui/material";

export default function ServiziWidget() {
  const navigate = useNavigate();
  let categorie = useSelector((state) => state.magazzino.categorie);

  if (categorie.getting) {
    return (
      <Box sx={{ mb: 6 }} id="servizi">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={4}>
            <Skeleton variant="rectangular" height={50} />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Grid>

          <Grid item xs={4}>
            <Skeleton variant="rectangular" height={50} />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Grid>

          <Grid item xs={4}>
            <Skeleton variant="rectangular" height={50} />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    if (categorie.getError) {
      return (
        <Container maxWidth="sm">
          <Alert severity="error">
            {categorie.getError || "Impossibile recuperare le categorie"}
          </Alert>
        </Container>
      );
    } else {
      if (!Array.isArray(categorie.list)) {
        return (
          <Container maxWidth="sm">
            <Alert severity="error">C'è stato un problema...</Alert>
          </Container>
        );
      } else {
        if (isEmpty(categorie.list)) {
          return null;
        } else {
          return (
            <Box sx={{ mb: 6 }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
              >
                {categorie.list.map((o, k) => {
                  if (o.sito !== true) {
                    return null;
                  } else {
                    return (
                      <Grid key={k} item xs={12} sm={6} md={4}>
                        <Card
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          {o.wallpaper && (
                            <CardMedia
                              component="img"
                              height="140"
                              image={o.wallpaper}
                              alt={o.nome}
                            />
                          )}
                          <CardContent sx={{ flex: "1 0 auto" }}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {o.nome}
                            </Typography>
                            <Typography>{o.descrizione_breve}</Typography>
                          </CardContent>
                          <CardActions>
                            <Button fullWidth onClick={() => navigate(o.url)}>
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
          );
        }
      }
    }
  }
}
