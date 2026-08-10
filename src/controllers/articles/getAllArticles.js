import { Article } from '../../models/article.js';



export const getAllArticles = async (req, res) => {
  const { page=1, perPage=12, category='general' } = req.query;
  const skip = (page - 1) * perPage;

  const articlesQuery = Article.find();

  if(category === 'popular') {
    articlesQuery.sort({ rate: -1 });
  }

  const [totalArticles, articles] = await Promise.all([
    articlesQuery.clone().countDocuments(),
    articlesQuery.skip(skip).limit(perPage)
  ]);

  const totalPages = Math.ceil(totalArticles / perPage);

  res.status(200).json({page, perPage, totalPages, totalArticles, articlesQuery: articles});
};
