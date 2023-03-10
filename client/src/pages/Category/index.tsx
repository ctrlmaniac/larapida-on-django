import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { find, isEmpty } from "lodash";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingCards, Wallpaper } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import ReactMarkdown from "react-markdown";
import NotFound from "../NotFound";
import list from "~/features/products/list";
import photo from "~/assets/photo.png";

const Category: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { category: url } = useParams();
  const { list: categories } = useAppSelector((state) => state.categories);
  const {
    list: products,
    listing,
    listError,
    response,
  } = useAppSelector((state) => state.products);

  const category = find(categories, (o) => o.url === url);

  React.useEffect(() => {
    if (!isEmpty(category)) {
      dispatch(list(`category=${category.id}&show_online=true`));
    }
  }, []);

  // Products
  let productsContent = <LoadingCards />;

  if (isEmpty(products)) {
    productsContent = <Typography>Non ci sono prodotti</Typography>;
  } else {
    productsContent = (
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        {products?.map((p) => {
          let price = <Typography>prezzo da concordare</Typography>;

          if (p.price_start_at) {
            price = <Typography>a partire da ${p.price} €</Typography>;
          }

          if (!isEmpty(p.price)) {
            price = <Typography>{p.price} €</Typography>;
          }

          if (!isEmpty(p.price_offer)) {
            price = (
              <Typography>
                <s>{p.price} €</s> {p.price_offer} €
              </Typography>
            );
          }

          return (
            <Grid key={p.id} item xs={12} sm={4}>
              <Card
                onClick={() => navigate(`/${p.category.url}/${p.url}`)}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 100px",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "initial",
                  },
                }}
              >
                <Box>
                  <CardContent>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {p.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {p.short_description}
                    </Typography>
                    <Typography>{price}</Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  sx={{ height: "100%", width: 100, backgroundColor: "grey" }}
                  image={!isEmpty(p.media) ? p.media[0].media : photo}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  }

  if (isEmpty(category)) {
    return <NotFound />;
  } else {
    return (
      <>
        {!isEmpty(category?.wallpaper) && (
          <Wallpaper image={category?.wallpaper!}>
            <Box sx={{ height: "40vh" }} />
          </Wallpaper>
        )}
        <Box mt={10}>
          <Container>
            <Box mb={3}>
              <Typography variant="h3" gutterBottom>
                {category.name}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {category?.short_description}
              </Typography>
              {!isEmpty(category?.description) && (
                <ReactMarkdown children={category?.description!} />
              )}
            </Box>

            {productsContent}
          </Container>
        </Box>
      </>
    );
  }
};

export default Category;
