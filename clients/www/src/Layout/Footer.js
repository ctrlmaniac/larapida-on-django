import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons";
import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: grey[400], pt: 3, pb: 3 }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Avatar
              alt="La Rapida Molinetto"
              src={
                process.env.PUBLIC_URL + "favicon/android-chrome-192x192.png"
              }
              sx={{
                margin: "24px auto",
                height: 96,
                width: 96,
              }}
            />
            <Typography variant="h2" component="h6">
              La Rapida Molinetto
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" component="p" gutterBottom>
              Seguici sui social
            </Typography>

            <IconButton
              color="primary"
              sx={{ mr: 2 }}
              onClick={() =>
                window.open("https://facebook.com/larapidamolinetto", "_blank")
              }
            >
              <IconBrandFacebook />
            </IconButton>

            <IconButton
              color="primary"
              sx={{ mr: 2 }}
              onClick={() =>
                window.open("https://facebook.com/larapidamolinetto", "_blank")
              }
            >
              <IconBrandInstagram />
            </IconButton>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          p: 4,
          textAlign: "center",
          backgroundColor: grey[500],
        }}
      >
        <Typography variant="body2">
          <b>La Rapida di Davide Di Criscito</b>
          <br />
          Via De Gasperi, 6, 25080 Molinetto di Mazzano
          <br />
          presso il Centro Commerciale Molinetto
          <br />
          C.F.: DCR DVD 90E23 B157 R - P.IVA: 03792670980
        </Typography>
      </Box>
    </React.Fragment>
  );
}
