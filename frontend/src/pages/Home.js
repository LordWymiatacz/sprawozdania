import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export default function Home(){
    const [content, setContent] = useState("")

    useEffect(()=>{
      const fetch = async()=>{
        const {data} = await axios.get('http://localhost:3000/pages?name=home')
        
            setContent(data[0].body)
            console.log(data[0].body)
            console.log(content)
      }
        fetch()
    },[])

    return(
        <div>
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
        </div>
    )
}