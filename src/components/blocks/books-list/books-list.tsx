import React, { useState } from "react";
import BooksCard from "../books-card/books-card";
import { IBook } from "../../../models/IBook";
import Pagination from "../pagination/pagination";

interface BooksListTypes {
  books: IBook[];
}

const BooksList: React.FC<BooksListTypes> = ({ books }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [booksPerPage] = useState<number>(8);

  const lastBooksIndex = currentPage * booksPerPage;
  const firstUsersIndex = lastBooksIndex - booksPerPage;
  const currentBooks = books.slice(firstUsersIndex, lastBooksIndex);
  const togglePage = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="books-list col-12">
        {currentBooks.map((item, index) => (
          <BooksCard key={index} book={item} />
        ))}
      </div>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        togglePage={togglePage}
      />
    </>
  );
};

export default BooksList;
