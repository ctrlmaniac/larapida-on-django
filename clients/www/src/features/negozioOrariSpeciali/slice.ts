import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { NegozioOrariSpeciali } from "models";

interface NegozioOrariSpecialiState {
  listing: boolean;
  listError: boolean;
  list: NegozioOrariSpeciali[];
}

const initialState: NegozioOrariSpecialiState = {
  listing: true,
  listError: false,
  list: [],
};

export const negozioOrariSpecialiSlice = createSlice({
  name: "negozioOrariSpeciali",
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

export const { listSuccess, listFail } = negozioOrariSpecialiSlice.actions;

export default negozioOrariSpecialiSlice.reducer;
