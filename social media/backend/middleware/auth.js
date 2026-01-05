import jwt from 'jsonwebtoken';
const jwtSecret = "HellBoy1234@"


// middleware --> are the functions that have the access of requesting to an objecct responding to an object they can also modify requewst and response and can also used between the routes

const varifyToken = async(req,res,next)=>{
   try {
     let token = req.headers.authorization;
    let decoded = jwt.verify(token, jwtSecret);  // {_id:userId}
        req.user = decoded._id
        next()
   } catch (error) {
    return res.status(401).json({msg:"not authorized"})
   }

}

// let obj = {
//     name:"one",
//     age:34
// }

// obj.course = "fullstack"
// console.log(obj)  // 

export default varifyToken