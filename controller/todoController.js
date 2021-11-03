const { Todo } = require('../model/TodoModel');

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body)
    res.json(todo);
  } catch (err) {
    res.json(err);
  }
};

module.exports = { createTodo };