const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
Name:String,
Surname:String,
Email:String,
PhoneNumber:String
},

 { timestamps:true, })

 module.exports = mongoose.model('Users', userSchema)