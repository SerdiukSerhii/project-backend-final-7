import createHttpError from 'http-errors';
import { Article } from '../../models/article.js';
import { User } from '../../models/user.js';

export const addSavedArticle = async (userId, articleId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  const article = await Article.findById(articleId);

  if (!article) {
    throw createHttpError(404, 'Article not found');
  }

  const isAlreadySaved = user.savedArticles.some(
    (id) => id.toString() === articleId,
  );

  if (isAlreadySaved) {
    throw createHttpError(409, 'Article is already saved');
  }

  user.savedArticles.push(articleId);
  await user.save();

  article.rate += 1;
  await article.save();

  await user.populate('savedArticles');

  return user.savedArticles;
};
