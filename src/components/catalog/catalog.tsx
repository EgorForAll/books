import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchBooks } from "../../store/reducers/fetch-books";
import BooksList from "../books-list/books-list";

const Catalog: React.FC = () => {
  const { books, isLoading, error } = useAppSelector(
    (state) => state.bookReducer
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <section className="catalog-section col-12">
      <div className="catalog-container">
        {isLoading && <h2 className="catalog-subtitle">Идет загрузка...</h2>}
        {error && <h2 className="catalog-subtitle">{error}</h2>}
        {/* {books.length > 0 ? null : (
          <h2 className="not-found">По вашему запросу ничего не найдено</h2>
        )} */}
        {books.length > 0 && <BooksList books={books} />}
      </div>
    </section>
  );
};

export default Catalog;
