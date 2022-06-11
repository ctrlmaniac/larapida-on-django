import { Box, Container, Typography, Button } from "@mui/material";

export default function AboveTheFold() {
  return (
    <Box
      sx={{
        textAlign: "center",
        color: (theme) => theme.palette.common.white,
        mb: 6,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/wallpapers/main.jpg"
        } )`,
      }}
    >
      <Box
        sx={{ background: "rgba(0,0,0,0.3)", pt: 8, pb: 8, minHeight: "50vh" }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            La Rapida
          </Typography>

          <Typography variant="h6" component="p">
            l'artigiano, calzolaio, nel cuore del Centro Commerciale Molinetto
          </Typography>
        </Container>

        <Container maxWidth="sm">
          <Box sx={{ pt: 8 }}>
            <Typography variant="h6" component="p" gutterBottom>
              ripariamo scarpe e borse, duplichiamo chiavi e radiocomandi, e
              diversi altri servizi
            </Typography>

            <Button variant="contained">Scopri tutti i nostri servizi</Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
