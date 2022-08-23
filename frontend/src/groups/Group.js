import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import { CircularProgress } from '@mui/material';
import './GroupCard.css'
import {useParams} from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Tasks from "../task/Tasks";
import AddTasks from "../mde/AddTasks";
import {useNavigate} from 'react-router-dom';
import ContentModal from '../ContentModal'

  export default function Group(){
    const {id} = useParams()

    const [content, setContent] = useState()


    useEffect(()=>{
      const fetch = async()=>{
        const {data} = await axios.get(`http://localhost:3000/groups/${id}`)
            setContent(data)
      }
        fetch()
    },[])

    return(
    <div className="content">
    



    {content? (
    <div>
      <ContentModal id_group={content.id}>
  <div className="card">Dodaj / modyfikuj zadania </div> 
 </ContentModal>
        <h1> {content.title? `${content.title}`:" Brak nazwy grupy"}</h1>
        <ReactMarkdown children={content.description? content.description: " Brak opisu dla grupy"} remarkPlugins={[remarkGfm]} />
        {/* <p><b><i>Prowadzący:</i></b> {content.username? `${content.username}`:" _______________"}</p> */}

    
    <Tasks id_group={content.id} />

         </div>):<CircularProgress />}


        </div>)
}


