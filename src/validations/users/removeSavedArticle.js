import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const removeSavedArticleSchema = {
  [Segments.PARAMS]: Joi.object({
    articleId: Joi.string().custom(objectIdValidator).required(),
  }),
};
