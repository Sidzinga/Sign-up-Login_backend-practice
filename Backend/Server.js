const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./Middleware/errorMiddleware')
const connectDB = require('./db')
const app =express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/user', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`Server running on port ${port}`))