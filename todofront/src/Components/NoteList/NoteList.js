import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import './NoteList.css';

export function NoteList() {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const res = await axios.get('http://localhost:4000/api/notes');
    setNotes(res.data);
  };

  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div className='container-notelist'>
      <h2 className='notelist-title'>Notes</h2>
      <div className='notes'>
        {notes.map((note) => (
          <div className='notecard' key={note._id}>
            <div className='notecard__title'>
              <h3>{note.title}</h3>
              <hr />
            </div>
            <div className='notecard__content'>
              <p>{note.content}</p>
              <p>{note.author}</p>
              <p>{format(note.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
