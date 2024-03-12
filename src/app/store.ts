import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import balance from "../features/slices/balanceSlice";
import quote from "../features/slices/quoteSlice";

export const store = configureStore({
  reducer: {
    balance, quote
  }
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
