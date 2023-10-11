import { IBook } from "../../models/IBook";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  books: IBook[];
  isLoading: boolean;
  error: string;
  currentBook: null | IBook;
}

const initialState: IState = {
  books: [],
  isLoading: false,
  error: "",
  currentBook: null,
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
    setCurrentBook(state, action: PayloadAction<IBook>) {
      state.currentBook = action.payload;
    },
  },
});

export default bookSlice.reducer;
