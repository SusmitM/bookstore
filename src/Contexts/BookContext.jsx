import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../apis/fakeFetch";

const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [BookData, setBookData] = useState([]);
  const [UserData, setUserData] = useState();

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/books");
      setBookData(response.data.books);
      setUserData(response.data.user)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

   const markAsRead=({id})=>{

    setBookData(BookData.map(book=>book.id===id ? {...book,read:!book.read} : book));
  }



  const addToFav=({id})=>{
    setBookData(BookData.map(book=>book.id===id ? {...book,isFav:true} : book));
  }

  const removeFromFav=({id})=>{
    setBookData(BookData.map(book=>book.id===id ? {...book,isFav:false} : book));

  }

  const numberOfFavBooks=BookData.reduce((total,crr)=>crr.isFav ? total+=1 : total,0);
  const numberOfBookRead=BookData.reduce((total,crr)=>crr.read ? total+=1 : total,0);



  return (
    <>
      <BookContext.Provider value={{BookData,UserData,markAsRead,addToFav,numberOfFavBooks,removeFromFav,numberOfBookRead}}>{children}</BookContext.Provider>
    </>
  );
};

export const useBookContext = () => useContext(BookContext);
