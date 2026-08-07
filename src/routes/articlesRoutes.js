import { Router } from 'express';
import { celebrate } from 'celebrate';
import { articles as ctrl } from '../controllers/index.js';
import { getSavedArticles } from '../controllers/articles/getSavedArticles.js';
import { authenticate } from '../middleware/authenticate.js'; 
import { createArticle } from '../controllers/articles/createArticle.js';
import { upload } from '../middleware/multer.js';
import { getArticleByIdSchema } from '../validations/index.js';

const articlesRouter = Router();

articlesRouter.use(authenticate);

articlesRouter.get('/articles/saved', getSavedArticles);
articlesRouter.post('/', upload.single('img'), createArticle);

articlesRouter.get(
  '/articles/:articleId',
  celebrate(getArticleByIdSchema),
  ctrl.getArticleById,
);

export default articlesRouter;
