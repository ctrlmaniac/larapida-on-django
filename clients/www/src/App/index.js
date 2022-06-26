import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { action } from "state";
import Home from "./Home";
import Prodotto from "./Prodotto";
import Servizio from "./Servizio";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(action.magazzino.categorie.list());
  });

  return (
    <Routes>
      <Route index path="/" element={<Home />} />

      <Route path="/:servizio/:prodotto" element={<Prodotto />} />

      <Route path="/:servizio" element={<Servizio />} />
    </Routes>
  );
}
