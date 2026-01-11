import express from 'express';
import { deleteUser, getUser, loginUser, registerUser, updateUser } from '../controllers/userController.js';
import varifyToken from '../middleware/auth.js';  //function
const router = express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/',varifyToken,getUser)
router.put('/',varifyToken,updateUser);  //varifyToken is middleware function here
router.delete('/',varifyToken,deleteUser);

export default router