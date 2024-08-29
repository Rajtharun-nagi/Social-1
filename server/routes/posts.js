import express from 'express';
import { createPost, getFeedPosts, getUserPosts, likePost } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Routes
router.post('/', verifyToken, createPost);
router.get('/', verifyToken, getFeedPosts);
router.get('/userId/:userId', verifyToken, getUserPosts);
router.patch('/:id/like', verifyToken, likePost);

export default router;
