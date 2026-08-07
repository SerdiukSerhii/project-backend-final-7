import { Router } from 'express';

import { auth as ctrl } from '../controllers/index.js';

// import { registerUserSchema, loginUserSchema } from '../validations/index.js';

const router = Router();

router.post('/auth/register', ctrl.registerUser);
router.post('/auth/login', ctrl.loginUser);

export default router;
