import mongoose from "mongoose";
let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        minLength:2,
        maxLength:100
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email already exists"]
    },
    password:{
        type:String,
        required:true 
    },
},{timestamps:true})

userSchema.add({
    profilePic:{
        type:String,
        default:"https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1906669723.jpg"
    },
    coverPic:{
        type:String,
        default:"https://tokystorage.s3.amazonaws.com/images/default-cover.png"
    }
})

// let Users = mongoose.model('collectionName', structure(rules and ragulations)
let Users = mongoose.model('users',userSchema)



export default Users




