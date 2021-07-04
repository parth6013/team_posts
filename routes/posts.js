import express from 'express';

import {getPosts,createPost,findMessage} from '../controllers/posts.js'
const router = express.Router();

router.post('/find',findMessage);
router.post('/create',createPost);

 export default router;

