import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Store } from "~/types";

interface State {
  response?: string;
  list?: Store[];
  listing: boolean;
  listError: boolean;
}

const initialState: State = {
  response: undefined,
  list: undefined,
  listing: false,
  listError: false,
};

export const storeSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    listStart: (state) => {
      state.listing = true;
    },
    listSuccess: (state, action: PayloadAction<Store[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.listing = false;
      state.response = undefined;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.list = undefined;
      state.response = action.payload;
      state.listError = true;
      state.listing = false;
    },
  },
});

export const { listStart, listSuccess, listFail } = storeSlice.actions;

export default storeSlice.reducer;
