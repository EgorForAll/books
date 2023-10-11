import React from "react";

interface PaginationTypes {
  booksPerPage: number;
  totalBooks: number;
  togglePage: (number: number) => void;
  currentPage: number;
  disabledBtn: () => boolean;
}

const Pagination: React.FC<PaginationTypes> = ({
  booksPerPage,
  totalBooks,
  togglePage,
  currentPage,
  disabledBtn,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <button
        className="page-button"
        onClick={() => togglePage(currentPage + 1)}
        disabled={disabledBtn()}
      >
        Load more
      </button>
    </div>
  );
};

export default Pagination;
