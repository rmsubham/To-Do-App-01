const mongoose = require('mongoose')
const DB = process.env.DATABASE

mongoose.connect(DB,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true,
  useFindAndModify:false
}).then( () => {console.log('database is ready to use')}).catch((e)=>{console.log(console.log(`${e}database error`));})