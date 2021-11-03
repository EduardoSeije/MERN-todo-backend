const express = require('express');
const route = express.Router();
const  { createTodo } = require('../controller/todoController');

route.post('/todos', createTodo);

module.exports = { route };