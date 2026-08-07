import { Router } from 'express';
import { getSavedArticles } from '../controllers/articles/getSavedArticles.js';
import { authenticate } from '../middleware/authenticate.js'; 
import { createArticle } from '../controllers/articles/createArticle.js';
import { upload } from '../middleware/multer.js';

const articlesRouter = Router();

articlesRouter.get('/saved', authenticate, getSavedArticles);
articlesRouter.post('/', authenticate, upload.single('img'), createArticle);


export default articlesRouter; 