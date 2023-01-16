import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Prodotto } from "~/models";

interface ProdottoState {
  listing: boolean;
  listError: boolean;
  list: Prodotto[];
  getting: boolean;
  getError: boolean;
  dettagli: Prodotto;
}

const initialState: ProdottoState = {
  listing: true,
  listError: false,
  list: [],
  getting: true,
  getError: false,
  dettagli: {},
};

export const prodottoSlice = createSlice({
  name: "prodotto",
  initialState,
  reducers: {
    listSuccess: (state, action: PayloadAction<{}[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.listing = false;
    },
    listFail: (state) => {
      state.listError = true;
      state.list = [];
      state.listing = false;
    },
    getSuccess: (state, action: PayloadAction<{}>) => {
      state.dettagli = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state) => {
      state.getError = true;
      state.dettagli = {};
      state.getting = false;
    },
  },
});

export const { listSuccess, listFail } = prodottoSlice.actions;

export default prodottoSlice.reducer;

