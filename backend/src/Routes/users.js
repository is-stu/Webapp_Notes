const { Router } = require('express');
const userControllers = require('../Controllers/users.controllers');
// const { route } = require('./notes');
const router = Router();

router
  .route('/')
  .get(userControllers.getUsers)
  .post(userControllers.createUser);

router
  .route('/:id')
  .get(userControllers.getUser)
  .post()
  .delete(userControllers.deleteUser)
  .put();

module.exports = router;

// post -> guardar un dato
// put -> actualizar un dato
// delete -> borrar un dato
