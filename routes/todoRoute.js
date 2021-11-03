const express = require('express');
const route = express.Router();
const  { createTodo, getAllTodos } = require('../controller/todoController');

route.post('/todos', createTodo);
route.get('/todos', getAllTodos);

module.exports = { route };