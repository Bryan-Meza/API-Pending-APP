const express = require('express');
const router = express.Router();
const TodoControllers = require('../controllers/todos.js');

router.get('/', TodoControllers.getAllTodos);
router.get('/:id', TodoControllers.getTodo);
router.post('/add', TodoControllers.addTodo);
router.put('/update/:id', TodoControllers.updateTodo);
router.delete('/delete/:id', TodoControllers.deleteTodo);

module.exports = router;
