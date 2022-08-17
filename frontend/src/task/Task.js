import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import { CircularProgress } from '@mui/material';
import './TaskCard.css'
import {useParams} from "react-router-dom";
import UploadFile from "../upload/UploadFile";
import UploadFile2 from "../upload/UploadFile2";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

  export default function Task(){
    const {id} = useParams()
    const [content, setContent] = useState()

    useEffect(()=>{
      const fetch = async()=>{
        const {data} = await axios.get(`http://localhost:3000/tasks/${id}`)
            setContent(data)
      }
        fetch()
    },[])

    return(
    <div className="content">
    {content? (
    <div>
        <h1> {content.title? `${content.title}`:" Brak nazwy zadania"}</h1>
        <p> {content.description? <ReactMarkdown children={content.description} remarkPlugins={[remarkGfm]} />:" Brak opisu"}</p>
        {/* <p><b><i>Prowadzący:</i></b> {content.username? `${content.username}`:" _______________"}</p> */}
        
         </div>

        ):<CircularProgress className="loader"/>}

        
        
      {/* <UploadFile/> */}
      {/* <UploadFile2/> */}
        </div>)
}

