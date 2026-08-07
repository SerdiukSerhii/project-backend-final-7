import { Router } from 'express';
import { celebrate } from 'celebrate';

import { articles as ctrl } from '../controllers/index.js';
import { getArticleByIdSchema } from '../validations/index.js';

const articlesRouter = Router();

articlesRouter.get(
  '/articles/:articleId',
  celebrate(getArticleByIdSchema),
  ctrl.getArticleById,
);

export default articlesRouter;
