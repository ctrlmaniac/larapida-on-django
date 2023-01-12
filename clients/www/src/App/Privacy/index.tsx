import React from "react";
import { Page } from "~/Components";
import {
  Container,
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const Privacy: React.FC = () => {
  return (
    <React.Fragment>
      <Page>
        <Container>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Privacy
            </Typography>

            <Typography>
              Qui puoi scoprire come vengono utilizzati i tuoi dati da parte
              nostra
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Modulo Contattaci
            </Typography>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Dato Richiesto</TableCell>
                  <TableCell>Trattamento del dato</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>
                    Verrà utilizzata solo ed esclusivamente per lo scopo di
                    essere ricontattati
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Container>
      </Page>
    </React.Fragment>
  );
};

export default Privacy;

