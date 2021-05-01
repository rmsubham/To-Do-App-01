const todoService = require('../service/service').todoService


exports.todoControl = {

  insert : async (req, res) => {
    console.log('add routes is hit')
    const data = await todoService.add(req.body)
    res.send({data : data, msz :'To Do Task is added'})
  },
  find : async (req, res) => {
    console.log('list routes is hit');
    const data = await todoService.get()
    res.send({ data: data, msz: 'To Do Task' })
  }
}