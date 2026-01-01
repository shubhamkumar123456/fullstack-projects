import mongoose from "mongoose";
let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2,
        maxLength:100
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true 
    },
},{timestamps:true})

// let Users = mongoose.model('collectionName', structure(rules and ragulations)
let Users = mongoose.model('users',userSchema)
export default Users




