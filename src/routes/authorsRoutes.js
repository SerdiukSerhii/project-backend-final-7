import { Router } from 'express';
import { celebrate } from 'celebrate';

import { authors as ctrl } from '../controllers/index.js';
import { getAllAuthorsSchema } from '../validations/index.js';

const authorsRouter = Router();

authorsRouter.get('/authors', celebrate(getAllAuthorsSchema), ctrl.getAllAuthors);

export default authorsRouter;
