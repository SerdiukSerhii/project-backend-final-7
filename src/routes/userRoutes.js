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

userRouter.get('/users/:userId', celebrate(userIdSchema), ctrl.getUserById);

userRouter.use(authenticate);

userRouter.patch(
  '/users/me',
  avatarUpload.single('avatar'),
  celebrate(updateCurrentUserSchema),
  ctrl.updateCurrentUser,
);

userRouter.patch(
  '/users/me/avatar',
  upload.single('avatar'),
  ctrl.updateUserAvatar,
);

userRouter.get('/articles/saved', ctrl.getSavedArticles);

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
