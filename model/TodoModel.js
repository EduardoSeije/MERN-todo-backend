const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: 'String',
    required: [true, 'Por favor, insira um título' ],
  },
  description: {
    type: 'String',
    required: [true, 'Por favor, insira uma descrição']
  }, 
},
  {
    timestamps: true,
  }
);

const Todo = mongoose.model('TodoModel', todoSchema);

module.exports = { Todo }; 