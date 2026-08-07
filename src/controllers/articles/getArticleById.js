import createHttpError from 'http-errors';

import { articles as services } from '../../services/index.js';

export const getArticleById = async (req, res) => {
  const { articleId } = req.params;

  const article = await services.getArticleById(articleId);

  if (!article) {
    throw createHttpError(404, 'Article not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully found article',
    data: article,
  });
};
