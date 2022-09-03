import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { NegozioOrari } from "models";

interface NegozioOrariState {
  listing: boolean;
  listError: boolean;
  list: NegozioOrari[];
}

const initialState: NegozioOrariState = {
  listing: true,
  listError: false,
  list: [],
};

export const negozioOrariSlice = createSlice({
  name: "negozioOrari",
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

export const { listSuccess, listFail } = negozioOrariSlice.actions;

export default negozioOrariSlice.reducer;
