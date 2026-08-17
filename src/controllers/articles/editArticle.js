import createError from 'http-errors';
import { Article } from '../../models/article.js';

export const editArticle = async (req, res, next) => {
  try {
    const { articleId } = req.params;
    const { _id: userId } = req.user;

    const article = await Article.findById(articleId);

    if (!article) {
      throw createError(404, 'Статтю з таким ID не знайдено');
    }

    if (article.ownerId.toString() !== userId.toString()) {
      throw createError(403, 'У вас немає прав на редагування цієї статті');
    }

    const updatedArticle = await Article.findByIdAndUpdate(
      articleId,
      req.body,
      { new: true, runValidators: true },
    );

    res.status(200).json({
      status: 'success',
      code: 200,
      data: updatedArticle,
    });
  } catch (error) {
    next(error);
  }
};
