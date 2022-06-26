import NotFound from "App/NotFound";
import { ErrorScreen, LoadingScreen } from "Components";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { action } from "state";
import Dettagli from "./Dettagli";

export default function Prodotto() {
  const dispatch = useDispatch();
  const { servizio, prodotto } = useParams();
  const url = `${servizio}/${prodotto}`;

  const prodotti = useSelector((state) => state.magazzino.prodotti.lista);

  React.useEffect(() => {
    dispatch(action.magazzino.prodotti.list({ sito: true, url: url }));
  }, [dispatch, url]);

  if (prodotti.getting) {
    return <LoadingScreen />;
  } else {
    if (prodotti.getError) {
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
