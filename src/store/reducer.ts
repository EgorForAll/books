import {
  createReducer,
  configureStore,
  createSlice,
  combineReducers,
} from "@reduxjs/toolkit";
import bookReducer from "./reducers/book-reducer";

export const rootReducer = combineReducers({
  bookReducer,
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore["dispatch"];
