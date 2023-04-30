import { NavLink } from "react-router-dom";
import { useBookContext } from "../Contexts/BookContext";
export const BookCard = ({ singleBookData,homepage,favoritesPage  }) => {
 
  const { id, title, author, publisher, year, image, price, read, isFav } =
    singleBookData;
  const { BookData, markAsRead, addToFav,removeFromFav } = useBookContext();


  return (
    <div className="bookCard">
      {
        homepage && (
            <div className="cardHeader">
        <div
          className={read ? "greenCircle" : "redCircle"}
          data-tooltip={read ? "Already Read" : "Not Read"}
        ></div>
        {isFav ? (
          <div className="favLink" data-tooltip="Go to the favorites page">
            <NavLink to="/favorites"> 🢅</NavLink>
          </div>
        ) : (
          <div
            className="favBtn"
            onClick={() => addToFav(singleBookData)}
            data-tooltip="Click to add to favorites"
          >
            {" "}
            ❤️
          </div>
        )}
      </div>
        )
      }

      <div className="imageDiv">
        <img src={image} />
      </div>
      <div className="bookDetails">
        <div>
          <b>Title: </b>
          {title}
        </div>
        <div>
          <b>Author: </b>
          {author}
        </div>
      </div>
      <div className="btnContainer">
      {
        homepage ? (
          <button
          className="ReadBtn"
          disabled={read}
          onClick={() => markAsRead({ id })}
        >
          {read ? "Already Read" : "Mark As Read"}
        </button>
        ) : (
          favoritesPage ? (
            <button
          className="ReadBtn"
          onClick={() => removeFromFav({ id })}
        >
          Remove From Favorites
        </button>

          ) : (
            <button
          className="ReadBtn"
          onClick={() => markAsRead({ id })}
        >
          Mark As Unread
          
        </button>
          )
        )
      }
      </div>
    </div>
  );
};
