import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { businessPrincipalSlice } from "./features/business/principal/slice";
import { categorySlice } from "./features/categories/slice";
import { productSlice } from "./features/products/slice";
import { storeSlice } from "./features/stores/slice";

export const store = configureStore({
  reducer: {
    businessPrincipal: businessPrincipalSlice.reducer,
    categories: categorySlice.reducer,
    products: productSlice.reducer,
    stores: storeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
