import { User } from '../models/user.js';
import { Session } from '../models/session.js';

export const optionalAuthenticate = async (req, res, next) => {
  const { sessionId, accessToken } = req.cookies;

  if (!sessionId || !accessToken) {
    return next();
  }

  try {
    const session = await Session.findOne({ _id: sessionId, accessToken });
    if (!session) return next();

    const isAccessTokenExpired = session.accessTokenValidUntil < new Date();
    if (isAccessTokenExpired) return next();

    const user = await User.findOne({ _id: session.userId });
    if (user) {
      req.user = user;
    }
  } catch {
    // ігноруємо помилки — просто лишаємо юзера неавторизованим
  }

  next();
};
