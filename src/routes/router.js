const todoControl = require('../conterlers/controler').todoControl
const express = require('express')
const routes = express.Router()


 routes.post('/add',  todoControl.insert)

 routes.get('/list', todoControl.find)


 module.exports = routes