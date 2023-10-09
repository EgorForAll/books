import { IBook } from "../../models/IBook";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBooks } from "./fetch-books";
interface IState {
  books: IBook[];
  isLoading: boolean;
  error: string;
}

const initialState: IState = {
  books: [],
  isLoading: false,
  error: "",
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.fulfilled.type]: (state, action: PayloadAction<IBook[]>) => {
      state.isLoading = false;
      state.error = "";
      state.books = action.payload.slice(0, 100);
    },
    [fetchBooks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchBooks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bookSlice.reducer;
