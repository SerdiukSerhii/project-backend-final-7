import { registerUser } from './auth/registerUser.js';
import { loginUser } from './auth/loginUser.js';
import { getUserById } from './users/getUserById.js';
import { deleteArticle } from './articles/deleteArticle.js';

export const auth = {
  registerUser,
  loginUser,
};

export const user = {
  getUserById,
};

export const articles = {
  deleteArticle,
};
