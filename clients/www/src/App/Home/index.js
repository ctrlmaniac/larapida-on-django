import { Page } from "Components";
import React from "react";
import AboveTheFold from "./AboveTheFold";
import ServiziWidget from "./Servizi";

export default function Home() {
  return (
    <Page>
      <AboveTheFold />

      <ServiziWidget />
    </Page>
  );
}
