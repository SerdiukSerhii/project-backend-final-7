import createHttpError from 'http-errors';
import { Article } from '../../models/article.js';
import { User } from '../../models/user.js';

export const addSavedArticle = async (userId, articleId) => {
  const article = await Article.findById(articleId);

  if (!article) {
    throw createHttpError(404, 'Article not found');
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $addToSet: { savedArticles: articleId } },
    { new: true },
  ).populate('savedArticles');

  return updatedUser.savedArticles;
};
