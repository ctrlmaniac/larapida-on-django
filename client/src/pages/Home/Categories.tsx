import React from "react";
import { useAppSelector } from "~/hooks";
import { filter, isEmpty } from "lodash";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const Categories: React.FC = () => {
  const { list: categories } = useAppSelector((state) => state.categories);

  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        {filter(categories, "show_online").map((cat) => (
          <Grid key={cat.id} item xs={12} sm={3} md={4}>
            <Card>
              {!isEmpty(cat.wallpaper) && (
                <CardMedia
                  sx={{ height: 200 }}
                  image={cat.wallpaper}
                  title={cat.name}
                />
              )}
              <CardContent>
                <Typography>
                  <strong>{cat.name}</strong>
                </Typography>
                <Typography>{cat.short_description}</Typography>
              </CardContent>
              <CardActions>
                <Button fullWidth>scopri di più</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Categories;
