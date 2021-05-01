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

  createdAt :  { type: Date, default: Date.now },
})

exports.todoschema = mongoose.model('todo', todo)