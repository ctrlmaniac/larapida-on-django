import React from "react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { groupBy, isEmpty } from "lodash";
import { useParams } from "react-router-dom";
import { LoadingScreen, Splash } from "~/components";
import {
  Box,
  Chip,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import get from "~/features/products/get";
import NotFound from "../NotFound";
import ReactMarkdown from "react-markdown";

const Product: React.FC = () => {
  const { product } = useParams();
  const dispatch = useAppDispatch();
  const { details, getting, getError, response } = useAppSelector(
    (state) => state.products
  );

  React.useEffect(() => {
    if (!isEmpty(product)) {
      dispatch(get(product!));
    }
  }, [product]);

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (getError) {
      return (
        <Splash>
          <Typography variant="h6">
            Impossibile caricare prodotto o prodotto non trovato!
          </Typography>
        </Splash>
      );
    } else {
      if (isEmpty(details)) {
        return <NotFound />;
      } else {
        let price = <Typography>prezzo da concordare</Typography>;

        if (details.price_start_at) {
          price = <Typography>a partire da ${details.price} €</Typography>;
        }

        if (!isEmpty(details.price)) {
          price = <Typography>{details.price} €</Typography>;
        }

        if (!isEmpty(details.price_offer)) {
          price = (
            <Typography>
              <s>{details.price} €</s> {details.price_offer} €
            </Typography>
          );
        }

        const variants = groupBy(
          details.variants.map((v) => v.attribute),
          "attribute"
        );

        return (
          <Box mt={16}>
            <Container>
              <Box mb={3}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={12} sm={6}>
                    <Typography variant="overline">
                      <Link href={"/" + details.category.url}>
                        {details.category.name}
                      </Link>
                    </Typography>
                    <Typography variant="h3">{details.name}</Typography>
                    <Typography gutterBottom>
                      {details.short_description}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {price}
                    </Typography>
                  </Grid>

                  {isEmpty(details.media) && (
                    <Grid item xs={12} sm={6}>
                      <Box
                        sx={{
                          overflowX: "auto",
                          width: "100%",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {details.media.map((img) => (
                          <img
                            key={img.id}
                            src={img.media}
                            alt="immagine rappresentativa del prodotto"
                            style={{
                              display: "inline",
                              width: "400px",
                              verticalAlign: "middle",
                            }}
                          />
                        ))}
                      </Box>
                    </Grid>
                  )}
                </Grid>
              </Box>

              {!isEmpty(details.variants) && (
                <Box mb={3}>
                  <Typography variant="h6" gutterBottom>
                    Varianti
                  </Typography>

                  <Box sx={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                    {Object.keys(variants).map((attribute, i) => (
                      <Box key={i} sx={{ display: "inline-block" }} mr={3}>
                        <Typography>{attribute}</Typography>
                        {variants[attribute].map((v, i) => {
                          return (
                            <Chip
                              key={i}
                              // @ts-ignore
                              label={v.value}
                              sx={{ marginRight: 2 }}
                            />
                          );
                        })}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}

              <ReactMarkdown children={details.description} />
            </Container>
          </Box>
        );
      }
    }
  }
};

export default Product;
