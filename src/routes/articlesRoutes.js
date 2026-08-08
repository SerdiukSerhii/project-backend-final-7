import { Router } from 'express';
import { celebrate } from 'celebrate';

import { articles as ctrl } from '../controllers/index.js';
import { getUserArticles } from '../controllers/articles/articlesControllers.js';
import { getSavedArticles } from '../controllers/articles/getSavedArticles.js';
import { authenticate } from '../middleware/authenticate.js';
import { getArticleByIdSchema, getAllArticlesSchema } from '../validations/index.js';


const articlesRouter = Router();

articlesRouter.get('/articles',celebrate(getAllArticlesSchema), ctrl.getAllArticles);

articlesRouter.get('/articles/user/:userId', getUserArticles);

articlesRouter.get(
  '/articles/:articleId',
  celebrate(getArticleByIdSchema),
  ctrl.getArticleById,
);

articlesRouter.use(authenticate);

articlesRouter.get('/articles/saved', getSavedArticles);

export default articlesRouter;
