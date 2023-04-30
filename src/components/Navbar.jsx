import { NavLink } from 'react-router-dom'
import { useBookContext } from "../Contexts/BookContext";
export const Navbar=()=>{
    const { numberOfFavBooks,numberOfBookRead } = useBookContext();
    const getActiveStyle = ({ isActive }) => ({
      fontWeight: isActive ? "600" : "400",
      color: isActive ? "red" : "black"
    });
    return(
        
    <div className='navbar'>
      <NavLink  to="/" style={getActiveStyle}>All Books</NavLink>
      <NavLink to="/favorites" style={getActiveStyle}>Favorites <div className='favCounter'>{numberOfFavBooks}</div></NavLink>
      <NavLink to="/read" style={getActiveStyle}>Read<div className='readCounter'> {numberOfBookRead}</div ></NavLink>
      <NavLink to="/profile" style={getActiveStyle}>Profile</NavLink>
      </div>
        
    )
}