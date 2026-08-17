import createHttpError from 'http-errors';
import { Article } from '../../models/article.js';
import { User } from '../../models/user.js';

export const removeSavedArticle = async (userId, articleId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  const isSaved = user.savedArticles.some((id) => id.toString() === articleId);

  if (!isSaved) {
    throw createHttpError(404, 'Article is not in the saved list');
  }

  user.savedArticles = user.savedArticles.filter(
    (id) => id.toString() !== articleId,
  );
  await user.save();

  const article = await Article.findById(articleId);

  if (article && article.rate > 0) {
    article.rate -= 1;
    await article.save();
  }

  await user.populate('savedArticles');

  return user.savedArticles;
};
