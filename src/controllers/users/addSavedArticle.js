import { addSavedArticle } from '../../services/users/addSavedArticle.js';

export const addSavedArticleController = async (req, res) => {
  const { articleId } = req.params;
  const userId = req.user._id;

  const savedArticles = await addSavedArticle(userId, articleId);

  res.status(200).json({
    status: 200,
    message: 'Article successfully added to saved list',
    data: savedArticles,
  });
};
