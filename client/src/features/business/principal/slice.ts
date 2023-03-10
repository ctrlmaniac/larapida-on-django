import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Business } from "~/types";

interface State {
  response?: string;
  details?: Business;
  getting: boolean;
  getError: boolean;
}

const initialState: State = {
  response: undefined,
  details: undefined,
  getting: false,
  getError: false,
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
      state.getError = false;
      state.getting = false;
      state.response = undefined;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.details = undefined;
      state.response = action.payload;
      state.getError = true;
      state.getting = false;
    },
  },
});

export const { getStart, getSuccess, getFail } = businessPrincipalSlice.actions;

export default businessPrincipalSlice.reducer;
