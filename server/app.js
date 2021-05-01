const dotenv = require('dotenv')
dotenv.config({path : './config.env'})
const express = require('express')
const PORT = process.env.PORT
require('./database/connect')
const app = express()
const routes = require('../src/routes/router')


app.use(express.json())
app.use('/', routes)

app.get('/todo', async (req,res) => {
  console.log('this is a app route');
  res.send(' this is from a app.js')
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})