import { Router } from 'express';
import { celebrate } from 'celebrate';

import { auth as ctrl } from '../controllers/index.js';

import { registerUserSchema, loginUserSchema } from '../validations/index.js';

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), ctrl.registerUser);
router.post('/auth/login', celebrate(loginUserSchema), ctrl.loginUser);

export default router;
