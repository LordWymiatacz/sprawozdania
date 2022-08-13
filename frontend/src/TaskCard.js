import React from "react";
import './TaskCard.css'
import { useNavigate } from "react-router-dom";

export default function TaskCard({name, username,id}){
    const navigate = useNavigate()
return(


<div className="card"  onClick={()=>navigate(`tasks/${id}`)}>
        <p>{name? `${name}`:" __________"}</p>
        <p>{username? `${username}`:" __________"}</p>
       
    </div>
    
)

}
