import React, { useEffect, useState } from 'react';
// axios para manejo de peticiones
import axios from 'axios';
// importando libreria para formateo de tiempo
import { format } from 'timeago.js';
// Importando icons
import DeleteIcon from '@material-ui/icons/Delete';
import './NoteList.css';
import Swal from 'sweetalert2';

export function NoteList() {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const res = await axios.get('http://localhost:4000/api/notes');
    setNotes(res.data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const handleDelete = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:4000/api/notes/${id}`);
        getNotes();
        Swal.fire('Deleted!', 'The note has been deleted.', 'success');
      }
    });
  };

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
            </div>
            <div className='notecard__details'>
              <p>{note.author}</p>
              <p>{format(note.date)}</p>
              <DeleteIcon
                id='notecard__delete'
                onClick={(e) => handleDelete(e, note._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
