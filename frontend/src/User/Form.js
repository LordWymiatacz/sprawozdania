import React, { useEffect, useState, useCallback } from 'react'
import './Style.css'
import UserElement from './UserElement';
import { CircularProgress } from '@mui/material';
import axios from 'axios';

export default function Form({id}) {

  const apiURL = `http://localhost:3000/users/${id}`
  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [index, setIndex] = useState("");
  const [review, setReview] = useState("")
  const [task, setTask] = useState("")
  const [group_task, setGroupTask] = useState("")
  const [score, setScore] = useState("")
  // const [userId,setUserId]=useState(null)

    useEffect(() => {
    getUsers();
  }, [])

  function getUsers() {
    fetch(apiURL).then((result) => {
      result.json().then((resp) => {

        setUser(resp)
        setName(resp.name)
        setIndex(resp.index)
        setEmail(resp.email)
        setTask(resp.task)
        setGroupTask(resp.group_task)
        setScore(resp.score)
        setReview(resp.review)
        console.log(resp)
      })
    })
  }


  function updateUser()
  {
    let item={name,index,email,review,task,score,group_task}

    fetch(`${apiURL}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json()
      getUsers()
    })
  }
  
  return (

     <form className="form">
      <div className='from-header'>
            <div className="form-row">
                <label className="form-label">Index</label>
                <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control form-control-input" value={index} disabled/>
            </div>
            <div className="form-row">
                <label className="form-label">Name</label>
                <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control form-control-input" value={name} disabled/>
            </div>
            <div className="form-row">
                <label className="form-label">E-mail</label>
                <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control form-control-input" value={email} disabled/>
            </div>
            <div className="form-row">
                <label className="form-label">Zadanie </label>
                <input onChange={(e)=>{setTask(e.target.value)}} type="text" className="form-control form-control-input" value={task} disabled/>
            </div>
            <div className="form-row">
                <label className="form-label">Grupa nr</label>
                <input onChange={(e)=>{setGroupTask(e.target.value)}} type="text" className="form-control form-control-input" value={group_task} disabled/>
            </div>

          </div>
            <div className="form-row">
                <input onChange={(e)=>{setScore(e.target.value)}} type="text" className="form-control form-control-input" value={score} placeholder="Punkty za zadania"/>
            </div>
            <div className="form-row">
                <label className="form-label" >Treść</label>
                <textarea onChange={(e)=>{setReview(e.target.value)}} className="form-control form-control-textarea" value={review}/>
            </div>
            
            <div className="form-row">
                <button onClick={updateUser}  className="button form-button">Update User</button>
            </div>
        </form> 
    
  );
}
