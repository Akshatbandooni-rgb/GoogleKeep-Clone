import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Notes from "./Notes";

const App = () => {
  const [NotesData, setNotesData] = useState([]);

  const deleteNote = (noteId) => {
    setNotesData((prevData) => {
      return prevData.filter((val, index) => {
        return index !== noteId;
      });
    });
  };
  const showNote = (formData) => {
    setNotesData((prevdata) => {
      return [...prevdata, formData];
    });
  };
  return (
    <>
      <Header />
      <CreateNote showNote={showNote} />
      {NotesData.map((notes, index) => {
        return (
          <Notes
            title={notes.title}
            content={notes.note}
            id={index}
            key={index}
            deleteNote={deleteNote}
          />
        );
      })}
    </>
  );
};

export default App;
