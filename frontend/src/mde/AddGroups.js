import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./Task.css";
import Main from "./Main"
import Sidebar from "./Sidebar"
import axios from "axios"


function AddGroups() {
const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const API = `${process.env.REACT_APP_API}/groups`
  

useEffect(()=>{
    const fetchData = async()=>{
        const {data} = await axios.get(API)
        setNotes(data)
    }
    fetchData()
},[])

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      description: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
    apiAddTask(newNote)
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
    deleteFetch(noteId)
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });
    setNotes(updatedNotesArr);
    apiEditTask(updatedNote.id,updatedNote);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };
// ------------------------------------------------------------------------------------------------------------------------------
async function apiEditTask(id,dane){
    const request = await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(dane)
    })
  }

  async function deleteFetch(id) {
    const request = await fetch(`${API}/${id}`, {
      method: 'DELETE'
    })
  }

async function apiAddTask(dane) {
    const request = await fetch(API, {
        method: "post",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(dane)
    })
}

// ------------------------------------------------------------------------------------------------------------------------------
  return (
    
    <div className="App">
      {notes.length > 0?
      <>
      <Sidebar taskOrGroup={"group"}
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main taskOrGroup={"group"}
      activeNote={getActiveNote()} 
      onUpdateNote={onUpdateNote} />
      
      </>:
      <div className="no-notes">
                <h1>Brak przedmiotów w bazie</h1>
                <button 
                    className="first-note" 
                    onClick={onAddNote}
                >
                    Dodaj przedmiot
                </button>
            </div>
      
    }
      
    </div>
  );
}

export default AddGroups;