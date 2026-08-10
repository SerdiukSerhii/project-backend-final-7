import { Article } from '../../models/article.js';

export const getArticlesByOwnerId = async (ownerId, page = 1, limit = 12) => {
  const skip = (page - 1) * limit;

  const articles = await Article.find({ ownerId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const totalItems = await Article.countDocuments({ ownerId });
  const totalPages = Math.ceil(totalItems / limit);

  return {
    articles,
    page,
    limit,
    totalItems,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
};
