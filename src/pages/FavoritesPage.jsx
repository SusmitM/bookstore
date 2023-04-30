import { useBookContext } from "../Contexts/BookContext";
import { BookCard } from "../components/BookCard";

export const FavoritesPage=()=>{
    const { BookData,numberOfFavBooks } = useBookContext();
    return(
        <>
        <h1> Favorite Books</h1>
        <div className="AllBooksContainer">
            
        {
          numberOfFavBooks>0 ? (
            BookData.map((singleBookData) => {
              if (singleBookData.isFav) {
                return <BookCard singleBookData={singleBookData} favoritesPage />
              } else {
                return ;
              }
            })
            ) : (<div className="favSectionMessage">Please Add Books To Favorites!!!</div>)
        }
      </div>
        </>
    )
}