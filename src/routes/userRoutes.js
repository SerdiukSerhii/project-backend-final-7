import { Router } from 'express';
import { user as ctrl } from '../controllers/index.js';
import { userIdSchema, addSavedArticleSchema } from '../validations/index.js';
import { celebrate } from 'celebrate';
import { authenticate } from '../middleware/authenticate.js';

const userRouter = Router();

userRouter.use(authenticate);

userRouter.get('/users/:userId', celebrate(userIdSchema), ctrl.getUserById);

userRouter.post(
  '/users/saved-articles/:articleId',
  authenticate,
  celebrate(addSavedArticleSchema),
  ctrl.addSavedArticleController,
);

export default userRouter;
