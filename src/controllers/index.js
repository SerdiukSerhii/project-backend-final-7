import { registerUser } from './auth/registerUser.js';
import { loginUser } from './auth/loginUser.js';
import { updateUserAvatar } from './users/updateUserAvatar.js';

export const auth = {
  registerUser,
  loginUser,
};

export const users = {
  updateUserAvatar,
};
