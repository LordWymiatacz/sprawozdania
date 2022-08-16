import ReactMarkdown from "react-markdown";
import React from "react";


const Main = ({ activeNote, onUpdateNote }) => {


  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">Wybierz zadanie</div>;

  return (
    <div className="app-main">
      
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Tytuł"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="description"
          placeholder="Opis zadania..."
          value={activeNote.description}
          onChange={(e) => onEditField("description", e.target.value)}
        />
      </div>
      <div className="app-main-note-preview">
        {/* <h1 className="preview-title">{activeNote.title}</h1> */}
        <ReactMarkdown className="markdown-preview">
          {activeNote.description}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;