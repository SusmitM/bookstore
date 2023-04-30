import {AllBooksPage} from "../pages/AllBooksPage";
import{FavoritesPage} from "../pages/FavoritesPage";
import {ProfilePage} from "../pages/ProfilePage";
import {ReadPage} from "../pages/ReadPage";
import { Route,Routes } from "react-router";
export const AllRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<AllBooksPage/>} />
            <Route path="/favorites" element={<FavoritesPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/read" element={<ReadPage/>} />
        </Routes>
        
        </>
    )
}