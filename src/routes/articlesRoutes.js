import { Router } from 'express';
import { getUserArticles } from '../controllers/articles/articlesControllers.js';

const articlesRouter = Router();

articlesRouter.get('/articles/user/:userId', getUserArticles);

export default articlesRouter;
