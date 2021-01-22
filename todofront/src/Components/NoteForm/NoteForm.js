import React, { useEffect, useState } from 'react';
import './NoteForm.css';
// importando axios
import axios from 'axios';
// importando libreria para el calendar
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function NoteForm() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState('');
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const getUsers = async () => {
    const res = await axios.get('http://localhost:4000/api/users');
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (e) => {
    setUserSelected(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      content,
      date,
      author: userSelected,
    };
    console.log(newNote);
  };

  const handleChangeDate = (date) => {
    setDate(date);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className='container-noteform'>
      <h1 className='noteform__header'>Create a note</h1>
      <form onSubmit={handleSubmit}>
        <div className='group group__selected'>
          <h4>Registered users</h4>
          <select className='select-noteform' onChange={handleChange} required>
            <option defaultValue>Select a user</option>
            {users.map((user) => (
              <option key={user._id} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
        </div>
        <div className='group group__title'>
          <label className='label' htmlFor='title'>
            Title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            onChange={handleChangeTitle}
            required
          />
        </div>
        <div className='group group__content'>
          <label className='label' htmlFor='content'>
            Content
          </label>
          <input
            type='textarea'
            name='content'
            id='content'
            placeholder='Description'
            onChange={handleChangeContent}
            required
          />
        </div>
        <div className='group__date'>
          <DatePicker selected={date} onChange={handleChangeDate} />
        </div>
        <div className='noteform__button'>
          <input type='submit' value='Crear' id='button' />
        </div>
      </form>
    </div>
  );
}
