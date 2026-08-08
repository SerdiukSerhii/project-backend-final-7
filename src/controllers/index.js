import { registerUser } from './auth/registerUser.js';
import { loginUser } from './auth/loginUser.js';

import { getUserById } from './users/getUserById.js';

import { getArticleById } from './articles/getArticleById.js';

import { getAllArticles } from './articles/getAllArticles.js';

export const auth = {
  registerUser,
  loginUser,
};

export const user = {
  getUserById,
};

export const articles = {
  getArticleById,
  getAllArticles,
};
