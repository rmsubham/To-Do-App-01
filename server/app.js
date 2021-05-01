const dotenv = require('dotenv')
dotenv.config({path : './config.env'})
const express = require('express')
const PORT = process.env.PORT

const app = express()

app.get('/todo', async (req,res) => {
  console.log('this is a app route');
  res.send(' this is from a app.js')
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})