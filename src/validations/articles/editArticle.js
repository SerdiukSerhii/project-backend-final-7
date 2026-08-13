import Joi from 'joi';

export const updateArticleSchema = {
  // Перевіряю айді в URL-рядку
  params: Joi.object({
    articleId: Joi.string().hex().length(24).required().messages({
      'string.hex': 'ID має бути валидним MongoDB ObjectId',
      'string.length': 'ID має містити 24 символи',
      'any.required': 'ID статті обов\'язковий',
    }),
  }),

  // перевірка тексту статті
  body: Joi.object({
    title: Joi.string().min(3).max(100).optional().messages({
      'string.min': 'Заголовок має містити мінімум 3 символи',
      'string.max': 'Заголовок не повинен перевищувати 100 символів',
    }),
    text: Joi.string().min(10).optional().messages({
      'string.min': 'Текст статті має містити щонайменше 10 символів',
    }),
  }),
};