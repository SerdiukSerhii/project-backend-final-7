import { Router } from 'express';
import { getSavedArticles } from '../controllers/articles/getSavedArticles.js';
import { authenticate } from '../middleware/authenticate.js';
import { articles as ctrl } from '../controllers/index.js';
import { celebrate } from 'celebrate';
import { articleIdSchema } from '../validations/articles/deleteArticle.js';

const articlesRouter = Router();

articlesRouter.get('/saved', authenticate, getSavedArticles);
articlesRouter.delete(
  '/articles/delete',
  authenticate,
  celebrate(articleIdSchema),
  ctrl.deleteArticle,
);

export default articlesRouter;
