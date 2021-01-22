import React from 'react';
//Importando el Link de react-router
import { Link } from 'react-router-dom';
// Importando el css del compo
import './Nav.css';
// Importando algunos logos
import NoteIcon from '@material-ui/icons/Note';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
// import UpdateIcon from '@material-ui/icons/Update';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export function Nav() {
  return (
    <div>
      <nav className='navbar'>
        <div className='menu-container'>
          <Link to='/' className='brand-left'>
            Stewar's Notes App {<NoteIcon />}
          </Link>
          <ul className='navbar-right'>
            <Link to='/create' className='navbar-right__item'>
              <li>{<NoteAddIcon />} Create a note</li>
            </Link>
            <Link to='/users' className='navbar-right__item'>
              <li>
                <PersonIcon /> Get users
              </li>
            </Link>
            <Link to='/user' className='navbar-right__item'>
              <li>
                <PersonAddIcon /> Create user
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
