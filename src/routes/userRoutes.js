import { Router } from 'express';
import { user as ctrl } from '../controllers/index.js';
import { upload } from '../middleware/multer.js';
import {
  userIdSchema,
  addSavedArticleSchema,
  removeSavedArticleSchema,
} from '../validations/index.js';
import { celebrate } from 'celebrate';
import { authenticate } from '../middleware/authenticate.js';

const userRouter = Router();

userRouter.get('/users/:userId', celebrate(userIdSchema), ctrl.getUserById);

userRouter.use(authenticate);

userRouter.patch(
  '/users/me/avatar',
  upload.single('avatar'),
  ctrl.updateUserAvatar,
);

userRouter.post(
  '/users/saved-articles/:articleId',
  celebrate(addSavedArticleSchema),
  ctrl.addSavedArticleController,
);

userRouter.delete(
  '/users/saved-articles/:articleId',
  celebrate(removeSavedArticleSchema),
  ctrl.removeSavedArticleController,
);

export default userRouter;
