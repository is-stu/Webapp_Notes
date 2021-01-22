const { Router } = require('express');
const notesControllers = require('../Controllers/notes.controllers');
// const { route } = require('./users');
const router = Router();

router
  .route('/')
  .get(notesControllers.getNotes)
  .post(notesControllers.createNotes);

router
  .route('/:id')
  .get(notesControllers.getNote)
  .put(notesControllers.updateNote)
  .delete(notesControllers.deleteNote);

module.exports = router;
