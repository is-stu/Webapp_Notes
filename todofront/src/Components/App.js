import React from 'react';
import './App.css';
// Components
import { Nav } from './Nav/Nav';
import { NoteForm } from './NoteForm/NoteForm';
import { NoteList } from './NoteList/NoteList';
import { UserForm } from './UserForm/UserForm';
import { UsersList } from './UsersList/UsersList';
// react-router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={NoteList} />
        <Route path='/edit/:id' component={NoteForm} />
        <Route path='/create' component={NoteForm} />
        <Route path='/user' component={UserForm} />
        <Route path='/users' component={UsersList} />
      </Switch>
    </Router>
  );
}
