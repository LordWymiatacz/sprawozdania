import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import { CircularProgress } from '@mui/material';
import TaskCard from './TaskCard'
import './TaskCard.css'

export default function Tasks({id_group}){



    const [content, setContent] = useState()

    useEffect(()=>{
      const fetch = async()=>{
        const {data} = await axios.get(`${process.env.REACT_APP_API}/tasks?group=${id_group}`)
            setContent(data)
      }
        fetch()
    },[id_group])

   return(

<div className="content">

{content ? content.map(e=>(
        <TaskCard 
        
        title={e.title} 
        key={e.id} 
        id={e.id}  
        description = {e.description} />)
    ):<CircularProgress/>}

</div>


   )

}
