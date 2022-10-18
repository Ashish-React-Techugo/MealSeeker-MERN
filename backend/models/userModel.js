const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    type:{
        type:String,
        enum:['user','admin'],
        required:true,
    },
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userImage:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('User', userSchema)