import { Joi, Segments } from 'celebrate';

export const updateCurrentUserSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().trim().min(2).max(32),
    email: Joi.string().trim().lowercase().email().max(64),
    password: Joi.string().min(8).max(64),
  }),
};
