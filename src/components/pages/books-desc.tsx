import { useAppSelector } from "../../hooks/hooks";
import SearchPanel from "../blocks/search-panel/search-panel";

const BookDesc = () => {
  const currentBook = useAppSelector((state) => state.bookReducer.currentBook);
  const image = currentBook?.volumeInfo.imageLinks.thumbnail;
  const categories = currentBook?.volumeInfo.categories;
  const title = currentBook?.volumeInfo.title;
  const authors = currentBook?.volumeInfo.authors;
  const description = currentBook?.volumeInfo.description;
  return (
    <>
      <SearchPanel />
      <section className="books-desc col-12">
        <div className="desc-image col-5 d-flex justify-content-center align-items-center">
          <img src={image} alt={title} width="200" height="300" />
        </div>
        <div className="desc-desc pt-4 ps-5 pe-5 col-7">
          <div className="desc-categories">
            Categories:{" "}
            {categories?.map((item, index) => (
              <span className="category" key={index}>
                {item}
              </span>
            ))}
          </div>
          <h2 className="desc-title">{title}</h2>
          <div className="desv-authors">
            {authors?.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          {description?.length && <div className="desc">{description}</div>}
        </div>
      </section>
    </>
  );
};

export default BookDesc;
