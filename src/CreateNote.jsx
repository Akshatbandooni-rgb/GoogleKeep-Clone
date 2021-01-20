import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    note: "",
  });
  const [expand, setExpand] = useState(false);
  const expandNote = () => {
    setExpand(true);
  };
  const compressNote = () => {
    setExpand(false);
  };

  const onSubmit = () => {
    setFormData({
      title: "",
      note: "",
    });
    props.showNote(formData);
  };
  const fetchNote = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="main_note" onDoubleClick={compressNote}>
        <form>
          {expand ? (
            <input
              type="text"
              placeholder="Title"
              autoComplete="off"
              className="formtext"
              onChange={fetchNote}
              name="title"
              value={formData.title}
            />
          ) : null}
          <textarea
            placeholder="Take a note..."
            className="formtext"
            onChange={fetchNote}
            name="note"
            value={formData.note}
            onClick={expandNote}
          />
          {expand ? (
            <Button onClick={onSubmit}>
              <AddIcon className="plus_sign"></AddIcon>
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
