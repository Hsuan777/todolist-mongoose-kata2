const mongoose = require('mongoose');
const toDoScheam = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title 必填']
    },
    done: Boolean,
    cratedAt: {
      type: Date,
      default: Date.now,
      select: false
    }
  },
  {
    versionKey: false
  }
)
const Todo = mongoose.model('Todo', toDoScheam);
module.exports = Todo;