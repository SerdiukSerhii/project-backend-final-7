import { Router } from 'express';
import { users as ctrl } from '../controllers/index.js';
import { upload } from '../middleware/multer.js';

const userRouter = Router();

userRouter.patch(
  '/users/me/avatar',
  upload.single('avatar'),
  ctrl.updateUserAvatar,
);

export default userRouter;
