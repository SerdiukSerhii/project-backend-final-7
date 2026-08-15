import { Article } from '../../models/article.js';
import { saveArticleImageToCloudinary } from '../../utils/saveArticleImageToCloudinary.js';
import { createArticleSchema } from '../../validations/articles/createArticle.js';


export const createArticle = async (req, res, next) => {
  try {
    const { error, value } = createArticleSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: error.details[0].message,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: "Поле фото статті є обов'язковим",
      });
    }

    const uploadResult = await saveArticleImageToCloudinary(
      req.file.buffer,
    );

    const newArticle = await Article.create({
      ...value,
      ownerId: req.user._id,
      img: uploadResult.secure_url,
    });

    return res.status(201).json({
      status: 'success',
      code: 201,
      data: newArticle,
    });
  } catch (error) {
    next(error);
  }
};