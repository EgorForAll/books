import { IBook } from "../../models/IBook";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  "books/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IBook[]>(
        "https://jsonplaceholder.typicode.com/photos"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось найти книгу");
    }
  }
);
