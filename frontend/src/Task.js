import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import { CircularProgress } from '@mui/material';
import './TaskCard.css'
import {useParams} from "react-router-dom";
import UploadFile from "./UploadFile";
import UploadFile2 from "./UploadFile2";

  export default function Task(){
    const {id} = useParams()
    const [content, setContent] = useState()

    useEffect(()=>{
      const fetch = async()=>{
        const {data} = await axios.get(`http://localhost:3000/tasks/${id}`)
        
            setContent(data)
            console.log(data)
            console.log(content)
      }
    setTimeout(()=>{
        fetch()
    },500)
    
    },[])

    return(
    <div className="content">
    {content? (
    <div>
        <p><b><i>Nazwa grupy:</i></b> {content.name? `${content.name}`:" _______________"}</p>
        <p><b><i>Opis:</i></b> {content.description? `${content.description}`:" _______________"}</p>
        <p><b><i>Prowadzący:</i></b> {content.username? `${content.username}`:" _______________"}</p>
        
         </div>

        ):<CircularProgress className="loader"/>}
        
      <UploadFile/>
      <UploadFile2/>
        </div>)
}

