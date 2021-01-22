import axios from 'axios';
import React, { useState } from 'react';
import './UserForm.css';
// importando libreria de alertas
import Swal from 'sweetalert2';

export function UserForm() {
  const [userName, setUserName] = useState('');

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/api/users', {
      username: userName,
    }); //NOTA: mandarlo en JSON
    setUserName('');
    Swal.fire({ title: 'User Created', icon: 'success' });
  };

  return (
    <div className='container-userform'>
      <h3 className='userform-text'>Creating a new user ...</h3>
      <div className='userform'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Username'
            className='userform__input'
            value={userName}
            onChange={handleChange}
          />
          <input
            type='submit'
            value='Create user'
            className='userform__button'
          />
        </form>
      </div>
    </div>
  );
}
