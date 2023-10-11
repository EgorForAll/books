import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import BooksList from "../books-list/books-list";

const Catalog: React.FC = () => {
  const { books, isLoading, error } = useAppSelector(
    (state) => state.bookReducer
  );

  return (
    <section className="catalog-section col-12">
      <div className="catalog-container">
        {isLoading && <h2 className="catalog-subtitle">Идет загрузка...</h2>}
        {error && <h2 className="catalog-subtitle">{error}</h2>}
        {books.length > 0 ? <BooksList books={books} /> : null}
      </div>
    </section>
  );
};

export default Catalog;
