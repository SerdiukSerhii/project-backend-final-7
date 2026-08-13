import { Router } from 'express';
import { celebrate } from 'celebrate';
import { auth as ctrl } from '../controllers/index.js';
import { registerUserSchema, loginUserSchema } from '../validations/index.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), ctrl.registerUser);
router.post('/auth/login', celebrate(loginUserSchema), ctrl.loginUser);
router.post('/auth/logout', authenticate, ctrl.logoutUser);
router.post('/auth/refresh', ctrl.refreshUserSession);

export default router;
