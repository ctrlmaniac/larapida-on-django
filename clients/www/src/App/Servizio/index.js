import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Servizio() {
  let { servizio } = useParams();
  let { categorie } = useSelector((state) => state.magazzino);

  console.log(servizio);

  return (
    <React.Fragment>
      <p>{servizio}</p>
    </React.Fragment>
  );
}
