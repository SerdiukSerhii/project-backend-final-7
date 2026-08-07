import { registerUser } from './auth/registerUser.js';
import { loginUser } from './auth/loginUser.js';

import { getUserById } from './users/getUserById.js';

import { getArticleById } from './articles/getArticleById.js';

import { updateCurrentUser } from './users/updateCurrentUser.js';


export const auth = {
  registerUser,
  loginUser,
};

export const user = {
  getUserById,
  updateCurrentUser,
};

export const articles = {
  getArticleById,
};
