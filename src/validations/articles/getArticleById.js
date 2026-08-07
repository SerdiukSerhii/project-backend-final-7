import { Joi, Segments } from 'celebrate';

export const getArticleByIdSchema = {
  [Segments.PARAMS]: Joi.object({
    articleId: Joi.string().hex().length(24).required(),
  }),
};
