export const ProfileCard=({UserData})=>{
  
    return(
        <>
         <div className="profileContainer">
        <div><img src={UserData.img}/></div>
            <div><b>Name: </b>{UserData.name}</div>
            <div><b>Bio: </b>{UserData.bio}</div>
        </div>
        </>
    )
}