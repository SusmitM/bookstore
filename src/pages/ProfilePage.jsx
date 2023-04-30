import { useBookContext } from "../Contexts/BookContext";
import { ProfileCard } from "../components/ProfileCard";

export const ProfilePage=()=>{
    const { UserData } = useBookContext();
    return(
        <>
        <h1>My Profile</h1>
        {<ProfileCard UserData={UserData}/>}
       
        </>
    )
}