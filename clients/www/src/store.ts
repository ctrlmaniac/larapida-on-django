import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { categorieSlice } from "features/categorie/slice";
import { negozioOrariSlice } from "features/negozioOrari/slice";
import { negozioOrariSpecialiSlice } from "features/negozioOrariSpeciali/slice";
import { prodottoSlice } from "features/prodotti/slice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    categorie: categorieSlice.reducer,
    prodotti: prodottoSlice.reducer,
    negozioOrari: negozioOrariSlice.reducer,
    negozioOrariSpeciali: negozioOrariSpecialiSlice.reducer,
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
