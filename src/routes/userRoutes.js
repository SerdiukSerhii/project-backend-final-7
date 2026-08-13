import { Router } from 'express';
import { celebrate } from 'celebrate';

import { user as ctrl } from '../controllers/index.js';
import {
  userIdSchema,
  updateCurrentUserSchema,
  addSavedArticleSchema,
  removeSavedArticleSchema,
} from '../validations/index.js';
import { authenticate } from '../middleware/authenticate.js';
import { upload, avatarUpload } from '../middleware/multer.js';

const userRouter = Router();

userRouter.get('/users/me', authenticate, ctrl.getCurrentUser);
userRouter.get('/users/:userId', celebrate(userIdSchema), ctrl.getUserById);

userRouter.patch(
  '/users/me',
  authenticate,
  avatarUpload.single('avatar'),
  celebrate(updateCurrentUserSchema),
  ctrl.updateCurrentUser,
);

userRouter.patch(
  '/users/me/avatar',
  authenticate,
  upload.single('avatar'),
  ctrl.updateUserAvatar,
);

userRouter.get('/articles/saved', authenticate, ctrl.getSavedArticles);

userRouter.post(
  '/users/saved-articles/:articleId',
  authenticate,
  celebrate(addSavedArticleSchema),
  ctrl.addSavedArticleController,
);

userRouter.delete(
  '/users/saved-articles/:articleId',
  authenticate,
  celebrate(removeSavedArticleSchema),
  ctrl.removeSavedArticleController,
);

export default userRouter;
