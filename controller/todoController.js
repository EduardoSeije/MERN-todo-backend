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

//get Todo by id 
const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (error) {
    res.json(error);
  };
};

//Update todo

const updateTodo = async (req, res) => {
  try {
    const todoToUpdate = await Todo.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
    }, {
      new: true,
      runValidators: true,
    });
    res.json('Update feito com sucesso');

  } catch (error) {
    res.json(error);
  };
};

// Delete todo

const deleteTodo = async (req, res) => {
  try {
    const todoToDelete = await Todo.findByIdAndDelete(req.params.id);
    res.json('Todo deletado com sucesso');
  } catch (error) {
    res.json(error);
  };
};

module.exports = { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo };