import React from "react";
import './TaskCard.css'
import { useNavigate } from "react-router-dom";

export default function TaskCard({title, username,id}){
    const navigate = useNavigate()
return(


<div className="card"  onClick={()=>navigate(`${id}`)}>
        <p>{title? `${title}`:" __________"}</p>
        {/* <p>{username? `${username}`:" __________"}</p> */}
       
    </div>
    
)

}
