import { registerUser } from './auth/registerUser.js';
import { loginUser } from './auth/loginUser.js';
import { updateUserAvatar } from './users/updateUserAvatar.js';

import { getUserById } from './users/getUserById.js';
import { deleteArticle } from './articles/deleteArticle.js';

import { getArticleById } from './articles/getArticleById.js';
import { addSavedArticleController } from './users/addSavedArticle.js';
import { getAllArticles } from './articles/getAllArticles.js';

export const auth = {
  registerUser,
  loginUser,
};

export const user = {
  updateUserAvatar,
  getUserById,
  addSavedArticleController,
};

export const articles = {
  getArticleById,
  getAllArticles,
  deleteArticle,
};
