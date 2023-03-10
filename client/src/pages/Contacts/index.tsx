import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useAppSelector } from "~/hooks";

const Contacts: React.FC = () => {
  const { details } = useAppSelector((state) => state.businessPrincipal);
  const { list: stores } = useAppSelector((state) => state.stores);

  return (
    <>
      <Container>
        <Box mt={16}>
          <Box mb={3}>
            <Typography variant="h3">Contatti</Typography>
          </Box>
        </Box>

        <Box mb={6}>
          <Typography variant="h6" gutterBottom>
            Chiamaci
          </Typography>
          <Typography>
            Puoi chiamarci al numero fisso{" "}
            <a href={"tel:" + details!.phone}>{details!.phone}</a> oppure al
            telefono cellulare{" "}
            <a href={"tel:" + details!.mobile}>{details!.mobile}</a>
          </Typography>
        </Box>

        <Box mb={6}>
          <Typography variant="h6" gutterBottom>
            Vieni a trovarci
          </Typography>

          <List>
            {stores?.map((store) => (
              <ListItem key={store.id}>
                <ListItemText primary={store.name} secondary={store.address} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box mb={6}>
          <Typography variant="h6" gutterBottom>
            Scrivici
          </Typography>

          <Typography>
            Scrivici un'email a{" "}
            <a href={"mailto:" + details!.email}>questo indirizzo email</a>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Contacts;
