import React from "react";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

const Notes = (props) => {
  const deleteNote = () => {
    props.deleteNote(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button onClick={deleteNote} className="btn">
          <DeleteRoundedIcon className="deleteIcon" />
        </button>
      </div>
    </>
  );
};

export default Notes;
