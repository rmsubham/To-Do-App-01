const mongoose = require('mongoose')

const todo = new mongoose.Schema({

  taskName : {
    type : String,
    required : true
  },

  taskDiscription : {
    type: String,
    required : true
  },

  creator: {
    type: String,
    required : true
  },

  dureation : {
    type: Number,
    required: true
  },

  createdAt: { type: Date, expires: 1800 , default: Date.now } 

})
todo.index({ createdAt: 1 }, { expireAfterSeconds: 1800 });

exports.todoschema = mongoose.model('todo', todo)
