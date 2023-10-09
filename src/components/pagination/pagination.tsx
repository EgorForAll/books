import React from "react";

interface PaginationTypes {
  booksPerPage: number;
  totalBooks: number;
  togglePage: (number: number) => void;
}

const Pagination: React.FC<PaginationTypes> = ({
  booksPerPage,
  totalBooks,
  togglePage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const onClickPagination = (number: number) => {
    togglePage(number);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <button
              className="page-button"
              onClick={() => onClickPagination(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
