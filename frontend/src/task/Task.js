import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import { CircularProgress } from '@mui/material';
import './TaskCard.css'
import {useParams} from "react-router-dom";
import UploadFile from "../upload/UploadFile";
import ContentModalUserScore from '../ContentModalUserScore'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CheckUser from "../User/CheckUser";

  export default function Task(){
    const {id} = useParams()
    const [content, setContent] = useState()

    useEffect(()=>{
      const fetch = async()=>{
        const {data} = await axios.get(`http://localhost:3000/tasks/${id}`)
            setContent(data)
      }
        fetch()
    },[id])

    return(
    <div className="content">
    {content? (
    <div>

        <h1> {content.title? `${content.title}`:" Brak nazwy zadania"}</h1>
        <ReactMarkdown children={content.description? content.description: " Brak opisu"} remarkPlugins={[remarkGfm]} />
        {/* <p><b><i>Prowadzący:</i></b> {content.username? `${content.username}`:" _______________"}</p> */}
        
        <div className="userResults">
        {/* Grupa 1 */}
        <CheckUser  id_task={content.id} group_task='1'/>
        {/* Grupa 2 */}
        <CheckUser  id_task={content.id} group_task='2'/>


        </div>
      
         </div>

        ):<CircularProgress className="loader"/>

        }

        </div>)
}

