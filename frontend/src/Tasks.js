import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import { CircularProgress } from '@mui/material';
import TaskCard from './TaskCard'
import './TaskCard.css'
export default function Tasks(){



    const [content, setContent] = useState()

    useEffect(()=>{
      const fetch = async()=>{
        const {data} = await axios.get('http://localhost:3000/tasks')
        
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

{content ? content.map(e=>(
        <TaskCard 
        
        name={e.name} 
        key={e.id} 
        id={e.id} 
        username={e.username}  
        description = {e.description} />)
    ):<CircularProgress/>}

</div>


   )

}
