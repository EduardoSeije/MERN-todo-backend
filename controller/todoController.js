const { Todo } = require('../model/TodoModel');

//create Todo

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body)
    res.json(todo);
  } catch (err) {
    res.json(err);
  };
};

//get All todos

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);   
  } catch (error) {
    res.json(error);
  };
};

module.exports = { createTodo, getAllTodos };