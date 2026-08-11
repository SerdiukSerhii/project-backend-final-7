import { User } from '../../models/user.js';

export const getSavedArticles = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const userWithSavedArticles = await User.findById(userId).populate({
      path: 'savedArticles',
      populate: {
        path: 'ownerId',
        select: 'name avatarUrl',
      },
    });

    if (!userWithSavedArticles) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      status: 'success',
      code: 200,
      data: userWithSavedArticles.savedArticles,
    });
  } catch (error) {
    next(error);
  }
};
