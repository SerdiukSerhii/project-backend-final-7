// import createHttpError from 'http-errors';
// import { User } from '../models/user.js';
// import { Session } from '../models/session.js';

// export const authenticate = async (req, res, next) => {
//   const { sessionId, accessToken } = req.cookies;

//   if (!sessionId || !accessToken) {
//     throw createHttpError(401, 'Missing access token');
//   }

//   const session = await Session.findOne({
//     _id: sessionId,
//     accessToken,
//   });

//   if (!session) {
//     throw createHttpError(401, 'Session not found');
//   }

//   const isAccessTokenExpired = session.accessTokenValidUntil < new Date();
//   if (isAccessTokenExpired) {
//     throw createHttpError(401, 'Access token expired');
//   }

//   const user = await User.findOne({ _id: session.userId });
//   if (!user) {
//     throw createHttpError(401, 'User not found');
//   }

//   req.user = user;
//   next();
// };

import createHttpError from 'http-errors';
import { User } from '../models/user.js';
import { Session } from '../models/session.js';

export const authenticate = async (req, res, next) => {
  const { sessionId, accessToken } = req.cookies;

  console.log('AUTH:', {
    hasSessionId: Boolean(sessionId),
    hasAccessToken: Boolean(accessToken),
    sessionId,
    accessTokenPrefix: accessToken?.slice(0, 8),
  });

  if (!sessionId || !accessToken) {
    throw createHttpError(401, 'Missing access token');
  }

  const session = await Session.findOne({
    _id: sessionId,
    accessToken,
  });

  console.log('SESSION FOUND:', Boolean(session));

  if (!session) {
    throw createHttpError(401, 'Session not found');
  }

  const isAccessTokenExpired = session.accessTokenValidUntil < new Date();

  if (isAccessTokenExpired) {
    throw createHttpError(401, 'Access token expired');
  }

  const user = await User.findOne({ _id: session.userId });

  if (!user) {
    throw createHttpError(401, 'User not found');
  }

  req.user = user;
  next();
};
