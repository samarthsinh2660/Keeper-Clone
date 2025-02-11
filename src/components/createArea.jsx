import React,{useState} from "react";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  const [expand , setexpand] = useState(false);

  function handel(e){
    const {name,value} = e.target;
    setnote(prevNote =>{
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(e){
    e.preventDefault();
    props.onAdd(note);
    setnote({
      title: "",
      content: ""
    })
  }

  return (
    <div>
      <form className="create-note">
        <input onChange={handel} onClick={() => setexpand(true)} name="title" placeholder="Title"  value={note.title}/>
        {expand && (
          <>
            <textarea onChange={handel} name="content" placeholder="Take a note..." rows="3" value={note.content} />
            <Zoom in={expand}>
              <Fab onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Zoom>
          </>
        )}


      </form>
    </div>
  );
}

export default CreateArea;
