import { Box, Container, Typography } from "@mui/material";
import { find, isEmpty } from "lodash";
import React from "react";
import { useParams } from "react-router-dom";
import { Wallpaper } from "~/components";
import { useAppSelector } from "~/hooks";
import ReactMarkdown from "react-markdown";

const Category: React.FC = () => {
  const { category: url } = useParams();
  const { list: categories } = useAppSelector((state) => state.categories);

  const category = find(categories, (o) => o.url === url);

  return (
    <>
      {!isEmpty(category?.wallpaper) && (
        <Wallpaper image={category?.wallpaper!}>
          <Box sx={{ height: 200 }} />
        </Wallpaper>
      )}
      <Box mt={10}>
        <Container>
          <Box mb={3}>
            <Typography variant="h3" gutterBottom>
              Categoria
            </Typography>
            <Typography variant="h6" gutterBottom>
              {category?.short_description}
            </Typography>
            {!isEmpty(category?.description) && (
              <ReactMarkdown children={category?.description!} />
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Category;
