import { useAppSelector } from "../../../hooks/hooks";

const Description = () => {
  const currentBook = useAppSelector((state) => state.bookReducer.currentBook);
  const image = currentBook?.volumeInfo.imageLinks
    ? currentBook?.volumeInfo.imageLinks.thumbnail
    : undefined;
  const smallImage = currentBook?.volumeInfo.imageLinks
    ? currentBook?.volumeInfo.imageLinks.smallThumbnail
    : undefined;
  const categories = currentBook?.volumeInfo.categories;
  const title = currentBook?.volumeInfo.title;
  const authors = currentBook?.volumeInfo.authors;
  const description = currentBook?.volumeInfo.description;
  return (
    <section className="books-desc col-12">
      <div className="desc-image col-5">
        <picture>
          <source
            media="(max-width: 570px)"
            srcSet={smallImage}
            width={100}
            height={200}
          />
          <img
            className="animate__animated animate__slideInLeft"
            src={image}
            alt={title}
            width={200}
            height={300}
          />
        </picture>
      </div>
      <div className="desc-desc col-7">
        <div className="desc-categories animate__animated animate__slideInRight">
          Categories:{" "}
          {categories?.map((item, index) => (
            <span className="category" key={index}>
              {item}
            </span>
          ))}
        </div>
        <h2 className="desc-title animate__animated animate__slideInRight">
          {title}
        </h2>
        <div className="desv-authors animate__animated animate__slideInRight">
          {authors?.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        {description?.length && (
          <div className="desc animate__animated animate__slideInRight">
            {description}
          </div>
        )}
      </div>
    </section>
  );
};

export default Description;
