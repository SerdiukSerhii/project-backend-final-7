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

articlesRouter.get('/articles/user/:userId', getUserArticles);

articlesRouter.use(authenticate);

articlesRouter.post('/articles', upload.single('img'), createArticle);

articlesRouter.patch(
  '/articles/:articleId',
  celebrate(editArticleSchema),
  ctrl.editArticle,
);

articlesRouter.delete(
  '/articles/:articleId',
  celebrate(articleIdSchema),
  ctrl.deleteArticle,
);

export default articlesRouter;
