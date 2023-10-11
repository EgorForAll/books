import React, { useRef } from "react";
import { bookSlice } from "../../store/reducers/book-reducer";
import { IRes } from "../../models/IRes";
import axios from "axios";
import { useAppDispatch } from "../../hooks/hooks";

const SearchPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const SearchBtnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const InputSearchRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onSearchBook = async (value: string) => {
    const req = value.trim();
    try {
      dispatch(bookSlice.actions.fetchBooks());
      const response = await axios.get<IRes>(
        `https://www.googleapis.com/books/v1/volumes?q=${req}&key=AIzaSyBrJVr2PFFSi8XTtE4-8NuEwjzmj6kn8Mk`
      );
      dispatch(bookSlice.actions.fetchBooksSuccess(response.data.items));
    } catch (e) {
      dispatch(bookSlice.actions.fetchBooksError(e.message));
    }
  };

  return (
    <header>
      <div className="header-container col-10 col-sm-8 col-lg-6 d-flex flex-column align-items-center">
        <h1 className="header-title mt-3">Search for books</h1>
        <div className="search-field col-12 d-flex mt-3">
          <label className="visually-hidden" htmlFor="search">
            Введите название книги
          </label>
          <input
            type="text"
            className="header-input col-11"
            id="search"
            name="search"
            ref={InputSearchRef}
          />
          <button
            onClick={() => onSearchBook(InputSearchRef.current.value)}
            ref={SearchBtnRef}
            type="button"
            className="search-button col-1"
          ></button>
        </div>
        <div className="sorting-field d-flex mt-4 col-12 justify-content-between">
          <div className="sorting-category col-5 col-lg-6">
            <label className="header-label col-10 col-lg-5" htmlFor="category">
              Categories:
            </label>
            <select
              className="category-input ms-2 col-12 col-lg-5"
              id="category"
              name="category"
            >
              <option value="all">all</option>
              <option value="non-fiction">non-fiction</option>
            </select>
          </div>
          <div className="sorting-category col-5 col-lg-6">
            <label className="header-label col-10 col-lg-5" htmlFor="sorting">
              Sorting by:
            </label>
            <select
              className="sorting-input ms-2 col-12 col-lg-5"
              id="sorting"
              name="sorting"
            >
              <option value="relevance">relevance</option>
              <option value="non-fiction">non-fiction</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SearchPanel;
