import { registerUserSchema } from './auth/registerUser.js';
import { loginUserSchema } from './auth/loginUser.js';

import { userIdSchema } from './users/userId.js';
import { updateCurrentUserSchema } from './users/updateCurrentUser.js';
import { addSavedArticleSchema } from './users/addSavedArticle.js';
import { removeSavedArticleSchema } from './users/removeSavedArticle.js';

import { getArticleByIdSchema } from './articles/getArticleById.js';
import { getAllArticlesSchema } from './articles/getAllArticles.js';
import { editArticleSchema } from './articles/editArticle.js';




export {
  registerUserSchema,
  loginUserSchema,
  userIdSchema,
  updateCurrentUserSchema,
  addSavedArticleSchema,
  removeSavedArticleSchema,
  getArticleByIdSchema,
  getAllArticlesSchema,
  editArticleSchema,
};
