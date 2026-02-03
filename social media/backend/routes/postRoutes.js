import express from 'express';
import { createPost, deletePost } from '../controllers/postController.js';
import varifyToken from '../middleware/auth.js';
const router = express.Router();

router.post('/create',varifyToken, createPost)
router.delete('/delete/:id', deletePost);

export default router;

// this is a router page