import React, { useEffect, useState, useCallback } from 'react'
import './Style.css'
import UserElement from './UserElement';
import { CircularProgress } from '@mui/material';
import axios from 'axios';

export default function CheckUser() {

  const apiURL = 'http://localhost:3000/users'
  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [index, setIndex] = useState("");
  const [review, setReview] = useState("")
  const [userId,setUserId]=useState(null)

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
        setUserId(resp.id)
        setReview(resp.review)
      })
    })
  }

  function deleteUser(id) {
    fetch(`${apiURL}/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json()
      getUsers()
    })
  }
  function selectUser(id)
  {
    let item=users[id-1];
    setName(item.name)
        setEmail(item.email)
        setIndex(item.index);
        setUserId(item.id)
        setReview(item.review)
  }

  function updateUser()
  {
    let item={name,index,email,review}

    fetch(`${apiURL}/${userId}`, {
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
    <>
    
    <h1>Students Results </h1>
    <div className="showResults">
      
   
          <div className='results'>

            
{users? users.map((item) =>
<div className='resultsAndButons'>
            <>
            
            <UserElement
                key={item.id}
                name={item.name}
                email={item.email}
                index={item.index}
                 />
          <div className='results-buttons'>
              <button className="button button-delete" onClick={() => deleteUser(item.id)}>Delete</button>
              <button className="button button-show" onClick={() => selectUser(item.id)}
              >Show Details</button> 
          </div>
              </>
            
            </div>
            ):<CircularProgress/>}



            
            
            
            </div>


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

          </div>
            
            <div className="form-row">
                <label className="form-label" >Treść</label>
                <textarea onChange={(e)=>{setReview(e.target.value)}} className="form-control form-control-textarea" value={review}/>
            </div>
            
            <div className="form-row">
                <button onClick={updateUser}  className="button form-button">Update User</button>
            </div>
        </form>
</div>
    </>
    
  );
}