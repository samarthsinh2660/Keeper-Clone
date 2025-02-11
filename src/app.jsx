import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import CreateArea from "./components/createArea";

function App(){
    const [Note1,setnote1] = useState([]);

    function addNote(newnote){
        setnote1(prevNotes => {
            return [...prevNotes, newnote];
        })
    }
    function deleteNote(id){
        setnote1(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }


    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}  />
        {Note1.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
          );
        })}
            <Footer />
        </div>
    )
}

export default App;
