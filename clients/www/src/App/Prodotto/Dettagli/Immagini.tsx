import { Box, Container } from "@mui/material";
import { filter } from "lodash";
import React from "react";

interface Props {
  immagini: {
    thumbnail: boolean;
    file: string;
  }[];
}

const Immagini: React.FC<Props> = ({ immagini }) => {
  let imgs = filter(immagini, (i) => i.thumbnail === false);

  return (
    <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          maxHeight: 280,
          textAlign: "center",
          mb: 3,
          mt: 3,
        }}
      >
        {imgs.map((imm, i) => {
          return (
            <img
              key={i}
              alt="Immagine"
              src={imm.file}
              style={{ maxHeight: 300 }}
            />
          );
        })}
      </Box>
    </Container>
  );
};

export default Immagini;
