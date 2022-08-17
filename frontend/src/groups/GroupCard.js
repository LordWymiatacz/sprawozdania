import React from "react";
import './GroupCard.css'
import { useNavigate } from "react-router-dom";


export default function GroupCard({title, username,id}){
    const navigate = useNavigate()


return(

<>
<div className="card"  onClick={()=>navigate(`/${id}`)}>
        <p>{title? `${title}`:" __________"}</p>
        {/* <p>{username? `${username}`:" __________"}</p> */}
       
    </div>
    

    
</>

)

}