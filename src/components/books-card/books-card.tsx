import React from "react";
import { IBook } from "../../models/IBook";

interface BooksCardTypes {
  book: IBook;
}

const BooksCard: React.FC<BooksCardTypes> = ({ book }) => {
  return (
    <div className="book-card">
      <div className="image-wrapper">
        <div>{book.id}</div>
        <div>{book.title}</div>
      </div>
    </div>
  );
};

export default BooksCard;
