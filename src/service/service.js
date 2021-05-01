const todoschema =require('../models/todoschema').todoschema
const todoControl = require('../conterlers/controler').todoControl

exports.todoService = {

  add : async (data) => {
    console.log('servci add');
     await todoschema.create(data)
     return data
  },
  get : async () => {
    console.log('service list');
   const data = await todoschema.find()
   return data

  }
}