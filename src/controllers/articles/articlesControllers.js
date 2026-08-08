import createHttpError from 'http-errors';
import mongoose from 'mongoose';
import { getArticlesByOwnerId } from '../../services/articles/articlesServices.js';

export const getUserArticles = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { page, limit } = req.query;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw createHttpError(400, 'Invalid user ID format');
    }

    const parsedPage = Math.max(1, Number(page) || 1);
    const parsedLimit = Math.max(1, Number(limit) || 12);

    const data = await getArticlesByOwnerId(userId, parsedPage, parsedLimit);

    res.status(200).json({
      status: 200,
      message: 'Successfully retrieved user articles',
      data,
    });
  } catch (error) {
    next(error);
  }
};
