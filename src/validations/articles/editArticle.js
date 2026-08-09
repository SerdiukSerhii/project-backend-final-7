import Joi from 'joi';

export const updateArticleSchema = Joi.object({
  title: Joi.string().min(3).max(100).optional().messages({
    'string.min': 'Заголовок має містити мінімум 3 символи',
    'string.max': 'Заголовок не повинен перевищувати 100 символів',
  }),
  text: Joi.string().min(10).optional().messages({
    'string.min': 'Текст статті має містити щонайменше 10 символів',
  }),
});