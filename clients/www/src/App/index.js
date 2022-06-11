import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
    </Routes>
  );
}
