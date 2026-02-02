import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    title:{
        type:String
    },
    file:[],
    userId:{
        type:String,
        required:true,
        ref:'users'
    }
},{timestamps:true})

const post = mongoose.model('posts',postSchema)
export default post