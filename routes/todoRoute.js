const express = require('express');
const route = express.Router();
const  { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo } = require('../controller/todoController');

route.post('/todos', createTodo);
route.get('/todos', getAllTodos);
route.get('/todos/:id', getTodoById);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);

module.exports = { route };