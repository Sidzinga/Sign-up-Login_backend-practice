
const asyncHandler = require('express-async-handler')

const User = require('../Models/UserModel')

const getUser = asyncHandler(async (req, res) => {

    const users = await User.find()


    res.status(200).json(users)
})
const loginUser = asyncHandler(async (req, res) => {
    const {name, email} = req.body
    
    const user = await User.findOne({email})
    
    if(user && name){
        res.json({
            _id:user.id,
            Name:user.name,
            Email:user.email
        })
    }
    else{ 
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})


const setUser = asyncHandler(async (req, res) => {
const {name, email, surname, phoneNumber} = req.body


    if(!name || !email || !surname || !phoneNumber){
        res.status(400)
        throw new Error('Please add all fields') 
    }

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }


    const user = await User.create({
    Name:req.body.name,
    Surname:req.body.surname,
    Email:req.body.email,
    PhoneNumber:req.body.phoneNumber
    })
 console.log(user)
    if(user) {
        res.status(201).json({
            _id:user.id,
            name:user.Name,
            email:user.Email
        })
    }
    else{ 
        res.status(400)
        throw new Error('Invalid User Data')
    }

console.log(req.body)

    res.status(200).json(user)
})

const updateUser = asyncHandler(async (req, res) => {

    const user = await User.findById(req.params.id)

    if(!user ){
        res.status(400)
        throw new Error("User Not Found!" )
        
    }
    const updatedUser = await User.findByIdandUpdate(req.params.id, req.body, {
         new: true,
    })

    res.status(200).json(updatedUser)


})

const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Delete User ${req.params.id}`})
})


module.exports = { getUser, setUser, updateUser, deleteUser, loginUser }