import { Router } from 'express';
import { getSavedArticles } from '../controllers/articles/getSavedArticles.js';
import { authenticate } from '../middleware/authenticate.js'; 

const articlesRouter = Router();

articlesRouter.get('/saved', authenticate, getSavedArticles);

export default articlesRouter;
