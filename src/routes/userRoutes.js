import { Router } from 'express';
import { user as ctrl } from '../controllers/index.js';
import { userIdSchema } from '../validations/index.js';
import { celebrate } from 'celebrate';

const userRouter = Router();

userRouter.get('/users/:userId', celebrate(userIdSchema), ctrl.getUserById);

export default userRouter;
