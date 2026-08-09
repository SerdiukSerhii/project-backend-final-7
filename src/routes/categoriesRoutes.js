import { Router } from 'express';
import { categories as controller } from '../controllers/index.js';

const categoriesRouter = Router();
categoriesRouter.get('/categories', controller.getCategories);

export default categoriesRouter;
