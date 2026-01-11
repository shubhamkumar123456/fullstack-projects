import Users from "../models/userCollection.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const jwtSecret = "HellBoy1234@"

const registerUser = async(req,res)=>{
    // res.send("register function is running")
    const {name, email, password} = req.body;

   try {
     let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(password, salt)
    // hash  --> can not be decoded //"awdjgawhdd567890"

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
    // res.send("login function is running")
    const {email , password} = req.body;
    try {
        let existUser = await Users.findOne({email});  // {_id, name, email, password} or null

    if(existUser){
        let comparePass = await bcrypt.compare(password , existUser.password); //true or false
        console.log(comparePass)
        if(comparePass){
            let token = jwt.sign({ _id: existUser._id },jwtSecret);  //
            console.log(token)  //ecoded form  (can be decoded)
            return res.status(200).json({msg:"user logged in successfully", token:token})
        }
        else{
            res.status(401).json({msg:"wrong password"})
        }
    }
    else{
         res.status(401).json({msg:"user not found"});
    }
    } catch (error) {
        res.status(500).json({msg:"error in login user", error:error.message})
    }
}

const getUser = async(req,res)=>{
     let id = req.user;
     let data = await Users.findById(id);
     res.json({msg:"data fetched successfully" , user:data});
}
const updateUser = async(req,res)=>{
    console.log(req.user);  //-->req --> params,query, body ,user
    const {name,password} = req.body;
    let obj = {};
    if(name){
       obj.name = name 
    }
    if(password){
        let salt = bcrypt.genSaltSync(10)
        let hashedPassword = bcrypt.genSaltSync(password, salt)
       obj.password = hashedPassword
    }
    let data = await Users.updatedOne({_id:req.user} , {$set:obj});
    res.status(200).json({msg:"user updated successfully"})
}
const deleteUser = async(req,res)=>{
    try {
        //  const {id} = req.params
        let id = req.user; //
    let deleteuser = await Users.deleteOne({_id:id});
    res.status(200).json({msg:"user deleted successfully"})
    } catch (error) {
        res.status(500).json({msg:"error in deleting user", error:error.message})
    }
}

export {
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    getUser
}