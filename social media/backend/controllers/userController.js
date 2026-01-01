import Users from "../models/userCollection.js";
import bcrypt from 'bcryptjs'

const registerUser = async(req,res)=>{
    // res.send("register function is running")
    const {name, email, password} = req.body;

   try {
     let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(password, salt)

    let data = await Users.insertOne({
        name:name,
        email:email,
        password:hashPassword
    })
    await data.save();
    res.status(201).json({msg:"user registered successfully"})

   } catch (error) {
        res.status(500).json({msg:"error in creating user", error:error.message})
   }

}
const loginUser = async(req,res)=>{
    res.send("login function is running")
}
const updateUser = async(req,res)=>{
    res.send("update function is running")
}
const deleteUser = async(req,res)=>{
    res.send("delete function is running")
}

export {
    registerUser,
    loginUser,
    updateUser,
    deleteUser
}