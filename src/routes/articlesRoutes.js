import { Router } from 'express';
import { celebrate } from 'celebrate';
import { articles as ctrl } from '../controllers/index.js';
import { getUserArticles } from '../controllers/articles/articlesControllers.js';
import { authenticate } from '../middleware/authenticate.js';
import { articleIdSchema } from '../validations/articles/deleteArticle.js';
import { createArticle } from '../controllers/articles/createArticle.js';
import { upload } from '../middleware/multer.js';
import {
  getArticleByIdSchema,
  getAllArticlesSchema,
  editArticleSchema,
  getUserArticlesSchema,
} from '../validations/index.js';

const articlesRouter = Router();

articlesRouter.get(
  '/articles',
  celebrate(getAllArticlesSchema),
  ctrl.getAllArticles,
);

articlesRouter.get(
  '/articles/:articleId',
  celebrate(getArticleByIdSchema),
  ctrl.getArticleById,
);

articlesRouter.get(
  '/articles/user/:userId',
  celebrate(getUserArticlesSchema),
  getUserArticles,
);

articlesRouter.post(
  '/articles',
  authenticate,
  upload.single('img'),
  createArticle,
);

articlesRouter.patch(
  '/articles/:articleId',
  authenticate,
  celebrate(editArticleSchema),
  ctrl.editArticle,
);

articlesRouter.delete(
  '/articles/:articleId',
  authenticate,
  celebrate(articleIdSchema),
  ctrl.deleteArticle,
);

export default articlesRouter;
