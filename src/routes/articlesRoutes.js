import { Router } from 'express';
import { getSavedArticles } from '../controllers/articles/getSavedArticles.js';
import { authenticate } from '../middleware/authenticate.js';

const articlesRouter = Router();

articlesRouter.use(authenticate);

articlesRouter.get('/saved', getSavedArticles);

export default articlesRouter;
