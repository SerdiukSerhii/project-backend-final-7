import createError from 'http-errors';

import { Article } from '../../models/article.js';
import { saveArticleImageToCloudinary } from '../../utils/saveArticleImageToCloudinary.js';

export const editArticle = async (req, res, next) => {
  try {
    const { articleId } = req.params;
    const { _id: userId } = req.user;
    const {
      title,
      desc,
      article: articleContent,
    } = req.body;

    const articleDocument = await Article.findById(articleId);

    if (!articleDocument) {
      throw createError(404, 'Статтю з таким ID не знайдено');
    }

    if (articleDocument.ownerId.toString() !== userId.toString()) {
      throw createError(
        403,
        'У вас немає прав на редагування цієї статті',
      );
    }

    if (title !== undefined) {
      articleDocument.title = title;
    }

    if (desc !== undefined) {
      articleDocument.desc = desc;
    }

    if (articleContent !== undefined) {
      articleDocument.article = articleContent;
    }

    if (req.file) {
      const uploadResult = await saveArticleImageToCloudinary(
        req.file.buffer,
      );

      articleDocument.img = uploadResult.secure_url;
    }

    const updatedArticle = await articleDocument.save();

    return res.status(200).json({
      status: 'success',
      code: 200,
      data: updatedArticle,
    });
  } catch (error) {
    next(error);
  }
};