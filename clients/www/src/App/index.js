import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { action } from "state";
import Home from "./Home";
import NotFound from "./NotFound";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(action.magazzino.categorie.list());
  });

  return (
    <Routes>
      <Route index path="/" element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
