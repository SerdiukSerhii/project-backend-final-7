export * from './auth/sessions.js';

import { getArticleById } from './articles/getArticleById.js';

export const articles = {
  getArticleById,
};
