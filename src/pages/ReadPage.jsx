import { useBookContext } from "../Contexts/BookContext";
import { BookCard } from "../components/BookCard";
export const ReadPage = () => {
  const { BookData,numberOfBookRead } = useBookContext();

  return (
    <>
      <h1>Read Books</h1>
      <div className="AllBooksContainer">
        {
        numberOfBookRead >0 ? (
          BookData.map((singleBookData) => {
          
            if (singleBookData.read) {
              return <BookCard singleBookData={singleBookData} />
            } else {
              return "";
            }
          })

        ) :
         (<div className="readSectionMessage">Please Read Some Books... Trust Me it helps</div>)
        }
      </div>
    </>
  );
};
