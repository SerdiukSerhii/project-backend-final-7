export * from './auth/sessions.js';
export * from './users/addSavedArticle.js';
export * from './users/removeSavedArticle.js';

import { getArticleById } from './articles/getArticleById.js';

export const articles = {
  getArticleById,
};
