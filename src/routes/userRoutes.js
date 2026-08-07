import { Router } from 'express';
import { celebrate } from 'celebrate';

import { user as ctrl } from '../controllers/index.js';
import {
  userIdSchema,
  updateCurrentUserSchema,
} from '../validations/index.js';
import { authenticate } from '../middleware/authenticate.js';
import { avatarUpload } from '../middleware/multer.js';

const userRouter = Router();

userRouter.patch(
  '/users/me',
  authenticate,
  avatarUpload.single('avatar'),
  celebrate(updateCurrentUserSchema),
  ctrl.updateCurrentUser,
);

userRouter.get(
  '/users/:userId',
  celebrate(userIdSchema),
  ctrl.getUserById,
);

export default userRouter;
