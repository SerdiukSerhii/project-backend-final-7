import { Router } from 'express';
import { users as ctrl, user as userCtrl } from '../controllers/index.js';
import { upload } from '../middleware/multer.js';
import { userIdSchema, addSavedArticleSchema } from '../validations/index.js';
import { celebrate } from 'celebrate';
import { authenticate } from '../middleware/authenticate.js';

const userRouter = Router();

userRouter.use(authenticate);

userRouter.patch(
  '/users/me/avatar',
  upload.single('avatar'),
  ctrl.updateUserAvatar,);
 
userRouter.get('/users/:userId', celebrate(userIdSchema), userCtrl.getUserById);

userRouter.post(
  '/users/saved-articles/:articleId',
  celebrate(addSavedArticleSchema),
  userCtrl.addSavedArticleController,);

export default userRouter;
