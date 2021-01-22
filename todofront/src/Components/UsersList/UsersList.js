import React, { useEffect, useState } from 'react';
import './UserList.css';
// Importo axios para hacer las peticiones a la API
import axios from 'axios';
// importando icon delete
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
// importando alertas
import Swal from 'sweetalert2';

export function UsersList() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get('http://localhost:4000/api/users');
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = (e, id) => {
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
        await axios.delete(`http://localhost:4000/api/users/${id}`);
        getUsers();
        Swal.fire('Deleted!', 'User has been deleted.', 'success');
      }
    });
  };

  return (
    <div className='container-userlist'>
      <h2 className='user-title'>The registered users are ...</h2>
      <ul className='user-list'>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user._id} className='user-name'>
              {user.username}
              <button
                className='delete-icon'
                onClick={(e) => deleteUser(e, user._id)}>
                <DeleteIcon />
              </button>
              <button
                className='update-icon'
                onClick={(e) => console.log('Holi actualizando')}>
                <UpdateIcon />
              </button>
            </li>
          ))
        ) : (
          <li>There's no one registered</li>
        )}
      </ul>
    </div>
  );
}
