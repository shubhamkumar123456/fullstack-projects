import express from 'express';
import { createPost, deletePost } from '../controllers/postController.js';
const router = express.Router();

router.post('/create', createPost)
router.delete('/delete/:id', deletePost);

export default router;