import createHttpError from 'http-errors';
import { Article } from '../../models/article.js';

export const deleteArticle = async (req, res) => {
  const { articleId } = req.params;
  const article = await Article.findOneAndDelete({
    _id: articleId,
    userId: req.user._id,
  });
  if (!article) {
    throw createHttpError(404, 'Note not found');
  }

  res.status(200).json(article);
};
