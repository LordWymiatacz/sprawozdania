import React, { useEffect, useState, useCallback } from 'react'
import './Style.css'
import UserElement from './UserElement';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import ContentModalUserScore from '../ContentModalUserScore'

export default function CheckUser({id_task,group_task,logged}) {

  const apiURL = `http://localhost:3000/users?task=${id_task}&group_task=${group_task}`
  const [users, setUser] = useState([])


    useEffect(() => {
    getUsers();
  }, [])

  function getUsers() {
    fetch(apiURL).then((result) => {
      result.json().then((resp) => {
        setUser(resp)
      })
    })
  }


  
  return (
    <>
    
    {/* <h1>Students Results </h1> */}
    <div className="showResults">
      
   
          <div className='results'>
            {group_task==1?'Grupa 1':group_task==2?'Grupa 2':'Grupa 3'}
            
            
            
{users? users.map((item) =>

<div className='resultsAndButons'>
            <>
            
            <UserElement
                key={item.id}
                name={item.name}
                email={item.email}
                index={item.index}
                 />
{logged?<ContentModalUserScore id={item.id}>
  <img src='https://toppng.com/uploads/preview/junior-icon-editor-free-download-for-windows-edit-icon-blue-1156302584549wxzpwmhr.png' height={30} width={30} alt="edit icon"></img>
 </ContentModalUserScore>:''}
              </>
            
            </div>
            ):<CircularProgress/>}

            </div>

</div>
    </>
    
  );
}
