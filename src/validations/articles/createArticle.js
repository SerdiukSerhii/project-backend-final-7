import Joi from 'joi';

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const createArticleSchema = Joi.object({

  title: Joi.string().min(3).max(48).required().messages({
    'string.min': 'Назва статті повинна бути не менше 3 символів',
    'string.max': 'Назва статті повинна бути не більше 48 символів',
    'any.required': 'Поле назва статті є обов\'язковим',
  }),

  desc: Joi.string().min(100).max(4000).required().messages({
    'string.min': 'Опис статті повинен бути не менше 100 символів',
    'string.max': 'Опис статті повинен бути не більше 4000 символів',
    'any.required': 'Поле опис статті є обов\'язковим',
  }),

  article: Joi.string().required().messages({
    'any.required': 'Текст статті є обов\'язковим',
  }),

  date: Joi.string().pattern(dateRegex).required().messages({
    'string.pattern.base': 'Дата повинна бути у форматі "рррр-мм-дд" (наприклад, 2026-08-07)',
    'any.required': 'Поле дата є обов\'язковим',
  }),

  author: Joi.string().min(4).max(48).required().messages({
    'string.min': 'Ім\'я автора повинно бути не менше 4 символів',
    'string.max': 'Ім\'я автора повинно бути не більше 48 символів',
    'any.required': 'Поле автор є обов\'язковим',
  }),
});
