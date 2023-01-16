import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Categoria } from "~/models";

interface CategorieState {
  listing: boolean;
  listError: boolean;
  list: Categoria[];
}

const initialState: CategorieState = {
  listing: true,
  listError: false,
  list: [],
};

export const categorieSlice = createSlice({
  name: "categorie",
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
  },
});

export const { listSuccess, listFail } = categorieSlice.actions;

export default categorieSlice.reducer;

