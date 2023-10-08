import React from "react";

const SearchPanel: React.FC = () => {
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
          />
          <button className="search-button col-1"></button>
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
