import React from "react";
import NotFound from "App/NotFound";
import { ErrorScreen, LoadingScreen } from "Components";
import { useAppDispatch, useAppSelector } from "hooks";
import { useParams } from "react-router-dom";
import Dettagli from "./Dettagli";
import list from "features/prodotti/list";

export default function Prodotto() {
  const dispatch = useAppDispatch();
  const { prodotto } = useParams();

  const prodotti = useAppSelector((state) => state.prodotti);

  React.useEffect(() => {
    dispatch(list({ sito: true, url: prodotto }));
  }, [dispatch, prodotto]);

  if (prodotti.listing) {
    return <LoadingScreen />;
  } else {
    if (prodotti.listError) {
      return (
        <ErrorScreen>
          Impossibile recuperare il prodotto! Riprova più tardi
        </ErrorScreen>
      );
    } else {
      switch (prodotti.list.length) {
        case 0:
          return <NotFound />;

        case 1:
          return <Dettagli prodotto={prodotti.list[0]} />;

        default: // TODO
          return <React.Fragment>Multiple Products</React.Fragment>;
      }
    }
  }
}
