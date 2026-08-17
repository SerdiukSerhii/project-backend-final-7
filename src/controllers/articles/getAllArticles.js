import { Article } from '../../models/article.js';

export const getAllArticles = async (req, res) => {
  const { page = 1, perPage = 12, category = 'general' } = req.query;
  const skip = (page - 1) * perPage;

  const articlesQuery = Article.find().populate('ownerId', 'name avatarUrl');

  if (category === 'popular') {
    articlesQuery.sort({ rate: -1 });
  }

  const [totalArticles, articles] = await Promise.all([
    articlesQuery.clone().countDocuments(),
    articlesQuery.skip(skip).limit(perPage),
  ]);

  const totalPages = Math.ceil(totalArticles / perPage);

  const savedIds = req.user
    ? new Set(req.user.savedArticles.map(id => id.toString()))
    : null;

  const articlesWithSavedFlag = articles.map(article => {
    const plainArticle = article.toObject();
    return {
      ...plainArticle,
      isSaved: savedIds ? savedIds.has(article._id.toString()) : false,
    };
  });

  res.status(200).json({
    page,
    perPage,
    totalPages,
    totalArticles,
    articles: articlesWithSavedFlag,
  });
};
