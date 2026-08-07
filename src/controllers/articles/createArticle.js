import { Article } from '../../models/article.js';
import { createArticleSchema } from '../../validations/articles/createArticle.js';

export const createArticle = async (req, res, next) => {
  try {
    const { error } = createArticleSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: error.details.message,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Поле фото статті є обов\'язковим',
      });
    }

    const ownerId = req.user._id;

    const imgPath = req.file.path || req.file.filename || 'https://example.com';

    const newArticle = await Article.create({
      ...req.body,
      ownerId,
      img: imgPath,
    });

    res.status(201).json({
      status: 'success',
      code: 201,
      data: newArticle,
    });

  } catch (error) {
    next(error);
  }
};
