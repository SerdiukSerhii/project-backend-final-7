import { Joi, Segments } from 'celebrate';

export const getUserArticlesSchema = {
  [Segments.PARAMS]: Joi.object({
    userId: Joi.string().hex().length(24).required(),
  }),
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(12),
    perPage: Joi.number().integer().min(1).max(100),
  }),
};
