import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export default function About(){
    const [content, setContent] = useState("")

    useEffect(()=>{
      const fetch = async()=>{
        const {data} = await axios.get(`${process.env.REACT_APP_API}/pages?name=about`)
            setContent(data[0].body)

      }
        fetch()
    },[])

    return(
        <div>
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
        </div>
    )
}