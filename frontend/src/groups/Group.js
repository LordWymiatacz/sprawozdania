import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import { CircularProgress } from '@mui/material';
import './GroupCard.css'
import {useParams} from "react-router-dom";
import UploadFile from "../upload/UploadFile";
import UploadFile2 from "../upload/UploadFile2";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Tasks from "../task/Tasks";

  export default function Group(){
    const {id} = useParams()
    // const {title} = useParams()
    const [groupID, setGroupID] = useState()
    const [content, setContent] = useState("")

    useEffect(()=>{
      const fetch = async()=>{
        const {data} = await axios.get(`http://localhost:3000/groups/${id}`)
            setContent(data)
            console.log(data.id)
            console.log(content.id)
            setGroupID(data.id)
            console.log(groupID)
      }
        fetch()
    },[])

    return(
    <div className="content">
    
    {content? (
    <div>
        <h1> {content.title? `${content.title}`:" Brak nazwy grupy"}</h1>
        <p> {content.description? <ReactMarkdown children={content.description} remarkPlugins={[remarkGfm]} />:" Brak opisu dla grupy"}</p>
        {/* <p><b><i>Prowadzący:</i></b> {content.username? `${content.username}`:" _______________"}</p> */}
        
{content.id}
    <Tasks
        id_group={content.id}
        />

        



         </div>

        ):<CircularProgress className="loader"/>}
        
        
        
      {/* <UploadFile/> */}
      {/* <UploadFile2/> */}
        </div>)
}


