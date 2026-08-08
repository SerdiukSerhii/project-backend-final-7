import {Joi, Segments} from 'celebrate';
import {CATEGORIES} from '../../constants/categories.js';

export const getAllArticlesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(100).default(12),
    category: Joi.string().valid(...CATEGORIES).default('general'),
  }),
};
