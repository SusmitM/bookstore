import { useBookContext } from "../Contexts/BookContext";
import { BookCard } from "../components/BookCard";
export const AllBooksPage = () => {
  const { BookData } = useBookContext();

  return (
    <>
      <h1>All Books</h1>

      <div className="AllBooksContainer">
        {
        BookData.map((singleBookData) => {
          return <BookCard singleBookData={singleBookData} homepage/>
        })
        }
      </div>
    </>
  );
};
