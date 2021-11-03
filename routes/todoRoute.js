const express = require('express');
const route = express.Router();
const  { createTodo, getAllTodos, getTodoById } = require('../controller/todoController');

route.post('/todos', createTodo);
route.get('/todos', getAllTodos);
route.get('/todos/:id', getTodoById);

module.exports = { route };