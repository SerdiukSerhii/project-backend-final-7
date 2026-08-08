import { User } from '../../models/user.js';
import createHttpError from 'http-errors';

export async function getUserById(req, res) {
  const { userId } = req.params;
  const user = await User.findOne({ _id: userId });
  if (!user) {
    throw createHttpError(404, 'User not found');
  }
  res.status(200).json(user);
}
