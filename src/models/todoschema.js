const mongoose = require('mongoose')
const ttl = require('mongoose-ttl')
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

//createdAt: { type: Date, expires: '1m' , default: Date.now } 

}, {timestamps: true })
//todo.index({ createdAt: 1 }, { expireAfterSeconds: 60 });
 todo.plugin(ttl, { ttl: '5m' });

exports.todoschema = mongoose.model('todo', todo)
