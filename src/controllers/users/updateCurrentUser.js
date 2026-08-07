import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';

import { User } from '../../models/user.js';
import { saveFileToCloudinary } from '../../utils/saveFileToCloudinary.js';

export const updateCurrentUser = async (req, res) => {
  const { name, email, password } = req.body ?? {};

  const hasDataToUpdate =
    name !== undefined ||
    email !== undefined ||
    password !== undefined ||
    Boolean(req.file);

  if (!hasDataToUpdate) {
    throw createHttpError(400, 'At least one field must be provided');
  }

  if (email !== undefined) {
    const existingUser = await User.findOne({
      email,
      _id: { $ne: req.user._id },
    });

    if (existingUser) {
      throw createHttpError(409, 'Email in use');
    }
  }

  const updateData = {};

  if (name !== undefined) {
    updateData.name = name;
  }

  if (email !== undefined) {
    updateData.email = email;
  }

  if (password !== undefined) {
    updateData.password = await bcrypt.hash(password, 10);
  }

  if (req.file) {
    updateData.avatarUrl = await saveFileToCloudinary(req.file.buffer);
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    updateData,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedUser) {
    throw createHttpError(404, 'User not found');
  }

  res.status(200).json(updatedUser);
};
