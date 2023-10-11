import { IBook } from "../../models/IBook";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  reducers: {
    fetchBooks(state) {
      state.isLoading = true;
    },
    fetchBooksSuccess(state, action: PayloadAction<IBook[]>) {
      state.isLoading = false;
      state.error = "";
      state.books = action.payload;
    },
    fetchBooksError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bookSlice.reducer;
