import { IRes } from "../../models/IRes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  "books/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IRes>(
        "https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyBrJVr2PFFSi8XTtE4-8NuEwjzmj6kn8Mk"
      );
      return response.data.items;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось найти книгу");
    }
  }
);
