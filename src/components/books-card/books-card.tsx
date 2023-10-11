import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../../models/IBook";
import { useAppDispatch } from "../../hooks/hooks";
import { bookSlice } from "../../store/reducers/book-reducer";

type BooksCardTypes = {
  book: IBook;
};

interface CustomLinkTypes {
  path: string;
}

const BooksCard: React.FC<BooksCardTypes> = ({ book }) => {
  const dispatch = useAppDispatch();
  const categories = book.volumeInfo.categories;
  const imageUrl = book.volumeInfo.imageLinks.thumbnail;
  const title = book.volumeInfo.title;
  const authors = book.volumeInfo.authors;

  const CustomLink: React.FC<CustomLinkTypes> = ({ path }) => {
    const onClickLink = () => dispatch(bookSlice.actions.setCurrentBook(book));
    return React.createElement(
      Link,
      { to: path },
      <h3 onClick={() => onClickLink()} className="book-title">
        {title}
      </h3>
    );
  };

  return (
    <div className="book-card">
      <div className="image-wrapper">
        <img src={imageUrl} width={128} height={181} alt={title} />
      </div>
      <div className="card-categories">
        {categories &&
          categories.map((item, index) => <span key={index}>{item}</span>)}
      </div>
      <CustomLink path={`/book/${book.id}`} />
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
