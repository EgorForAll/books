import React from "react";
import { useAppSelector } from "../../../hooks/hooks";
import BooksList from "../../blocks/books-list/books-list";
import Loader from "../loader/loader";

const Catalog: React.FC = () => {
  const { books, isLoading, error } = useAppSelector(
    (state) => state.bookReducer
  );

  return (
    <section className="catalog-section col-12">
      <div className="catalog-container">
        {isLoading && <Loader />}
        {error && <h2 className="catalog-subtitle">{error}</h2>}
        {books.length > 0 ? <BooksList books={books} /> : null}
      </div>
    </section>
  );
};

export default Catalog;
