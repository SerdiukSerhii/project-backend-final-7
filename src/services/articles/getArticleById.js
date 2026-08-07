import { Article } from '../../models/article.js';

export const getArticleById = async (articleId) => {
  return Article.findById(articleId);
};
