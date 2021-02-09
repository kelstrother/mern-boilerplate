//////////////////////////
//? DEPENDENCIES
//////////////////////////
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
/////////////////////////
//? DATABASE CONNECTION
//////////////////////////
const mongoose = require('./db/connection')
//////////////////////////
//? GLOBAL VARIABLES
//?  (DESTRUCTURING .ENV VARIABLES)
////////////////////////// 
const {PORT = 4000} = process.env
//////////////////////////
//? APPLICATION OBJECT
//////////////////////////
const app = express()
//////////////////////////
//?                           Middleware
//////////////////////////
app.use(cors())      //to prevent cors errors, currently allowing all traffic
app.use(morgan('tiny'))       //server logging
app.use(express.json())       //parse json bodies
app.use(express.urlencoded({extended: true}))//parse urlencoded from data bodies
//////////////////////////
//? SERVER LISTENER
//////////////////////////
app.get('/', (req, res) => {
   res.json({
      hello: 'World'
   })
})
//////////////////////////
//? SERVER LISTENER
//////////////////////////
app.listen(PORT, () => {
   console.log(`you are listening on port ${PORT}`)
})