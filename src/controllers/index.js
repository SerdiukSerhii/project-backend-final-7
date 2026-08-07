import { registerUser } from './auth/registerUser.js';
import { loginUser } from './auth/loginUser.js';
import { getUserById } from './users/getUserById.js';

export const auth = {
  registerUser,
  loginUser,
};

export const user = {
  getUserById,
};
