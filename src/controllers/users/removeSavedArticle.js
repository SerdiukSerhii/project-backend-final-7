import { removeSavedArticle } from '../../services/users/removeSavedArticle.js';

export const removeSavedArticleController = async (req, res) => {
  const { articleId } = req.params;
  const userId = req.user._id;

  const savedArticles = await removeSavedArticle(userId, articleId);

  res.status(200).json({
    status: 200,
    message: 'Article successfully removed from saved list',
    data: savedArticles,
  });
};
