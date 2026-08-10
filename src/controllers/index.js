import { registerUser } from './auth/registerUser.js';
import { updateUserAvatar } from './users/updateUserAvatar.js';
import { loginUser, refreshUserSession } from './auth/loginUser.js';
import { logoutUser } from './auth/logoutUser.js';

import { getUserById } from './users/getUserById.js';
import { updateCurrentUser } from './users/updateCurrentUser.js';
import { addSavedArticleController } from './users/addSavedArticle.js';
import { removeSavedArticleController } from './users/removeSavedArticle.js';

import { deleteArticle } from './articles/deleteArticle.js';
import { getArticleById } from './articles/getArticleById.js';
import { getAllArticles } from './articles/getAllArticles.js';
import { editArticle } from './articles/editArticle.js';

import { getCategories } from './categories/getCategories.js';

export const auth = {
  registerUser,
  loginUser,
  refreshUserSession,
  logoutUser,
};

export const user = {
  updateUserAvatar,
  getUserById,
  updateCurrentUser,
  addSavedArticleController,
  removeSavedArticleController,
};

export const articles = {
  getArticleById,
  getAllArticles,
  deleteArticle,
  editArticle,
};


export const categories = {
  getCategories,
};
