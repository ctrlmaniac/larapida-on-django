import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Business } from "~/types";

interface State {
  getting: boolean;
  getError?: string;
  details?: Business;
}

const initialState: State = {
  getting: false,
  getError: undefined,
  details: undefined,
};

export const businessPrincipalSlice = createSlice({
  name: "business_principal",
  initialState,
  reducers: {
    getStart: (state) => {
      state.getting = true;
    },
    getSuccess: (state, action: PayloadAction<Business>) => {
      state.details = action.payload;
      state.getError = undefined;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.details = undefined;
      state.getError = action.payload;
      state.getting = false;
    },
  },
});

export const { getStart, getSuccess, getFail } = businessPrincipalSlice.actions;

export default businessPrincipalSlice.reducer;
