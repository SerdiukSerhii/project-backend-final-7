import { registerUserSchema } from './auth/registerUser.js';
import { loginUserSchema } from './auth/loginUser.js';
import { userIdSchema } from './users/userId.js';
import { getArticleByIdSchema } from './articles/getArticleById.js';
import { getAllArticlesSchema } from './articles/getAllArticles.js';

export {
  registerUserSchema,
  loginUserSchema,
  userIdSchema,
  getArticleByIdSchema,
  getAllArticlesSchema,
};
