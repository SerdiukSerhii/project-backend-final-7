import { registerUserSchema } from './auth/registerUser.js';
import { loginUserSchema } from './auth/loginUser.js';
import { userIdSchema } from './users/userId.js';
import { getArticleByIdSchema } from './articles/getArticleById.js';
import { addSavedArticleSchema } from './users/addSavedArticle.js';
import { getAllArticlesSchema } from './articles/getAllArticles.js';
import { updateArticleSchema } from './articles/editArticle.js'; 

export {
  registerUserSchema,
  loginUserSchema,
  userIdSchema,
  getArticleByIdSchema,
  addSavedArticleSchema,
  getAllArticlesSchema,
  updateArticleSchema as editArticleSchema,
};
