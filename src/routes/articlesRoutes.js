import { Router } from 'express';
import { celebrate } from 'celebrate';
import { articles as ctrl } from '../controllers/index.js';
import { getUserArticles } from '../controllers/articles/articlesControllers.js';
import { getSavedArticles } from '../controllers/articles/getSavedArticles.js';
import { authenticate } from '../middleware/authenticate.js';
import { articleIdSchema } from '../validations/articles/deleteArticle.js';
import { createArticle } from '../controllers/articles/createArticle.js';
import { upload } from '../middleware/multer.js';
import {
  getArticleByIdSchema,
  getAllArticlesSchema,
  editArticleSchema,
} from '../validations/index.js';

const articlesRouter = Router();

articlesRouter.get('/articles/saved', authenticate, getSavedArticles);
articlesRouter.delete(
  '/articles/delete',
  authenticate,
  celebrate(articleIdSchema),
  ctrl.deleteArticle,
);

articlesRouter.get(
  '/articles',
  celebrate(getAllArticlesSchema),
  ctrl.getAllArticles,
);

articlesRouter.post('/', authenticate, upload.single('img'), createArticle);
articlesRouter.get('/articles/user/:userId', getUserArticles);

articlesRouter.get(
  '/articles/:articleId',
  celebrate(getArticleByIdSchema),
  ctrl.getArticleById,
);

articlesRouter.patch(
  '/articles/:articleId',
  authenticate,
  celebrate(editArticleSchema),
  ctrl.editArticle,
);

export default articlesRouter;
