import { Router } from 'express';
import { celebrate } from 'celebrate';

import { articles as ctrl } from '../controllers/index.js';
import { getSavedArticles } from '../controllers/articles/getSavedArticles.js';
import { authenticate } from '../middleware/authenticate.js';
import { getArticleByIdSchema, getAllArticlesSchema } from '../validations/index.js';


const articlesRouter = Router();

articlesRouter.get('/articles',celebrate(getAllArticlesSchema), ctrl.getAllArticles);

articlesRouter.use(authenticate);

articlesRouter.get('/articles/saved', getSavedArticles);

articlesRouter.get(
  '/articles/:articleId',
  celebrate(getArticleByIdSchema),
  ctrl.getArticleById,
);

export default articlesRouter;
