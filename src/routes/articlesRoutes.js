import { Router } from 'express';
import { getUserArticles } from '../controllers/articles/articlesControllers.js';
import { getSavedArticles } from '../controllers/articles/getSavedArticles.js';
import { authenticate } from '../middleware/authenticate.js';

const articlesRouter = Router();

articlesRouter.get('/articles/user/:userId', getUserArticles);
articlesRouter.get('/saved', authenticate, getSavedArticles);

export default articlesRouter;