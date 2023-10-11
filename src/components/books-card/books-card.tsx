import React from "react";
import { IBook } from "../../models/IBook";

type BooksCardTypes = {
  book: IBook;
};

const BooksCard: React.FC<BooksCardTypes> = ({ book }) => {
  const categories = book.volumeInfo.categories;
  const imageUrl = book.volumeInfo.imageLinks.thumbnail;
  const title = book.volumeInfo.title;
  const authors = book.volumeInfo.authors;
  return (
    <div className="book-card">
      <div className="image-wrapper">
        <img src={imageUrl} width={128} height={181} alt={title} />
      </div>
      <div className="card-categories">
        {categories &&
          categories.map((item, index) => <span key={index}>{item}</span>)}
      </div>
      <h3 className="book-title">{title}</h3>
      {authors ? (
        <div className="authors">
          Авторы:{" "}
          {authors.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default BooksCard;
