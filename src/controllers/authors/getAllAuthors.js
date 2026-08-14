import { User } from '../../models/user.js';

export const getAllAuthors = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;

  const authorsQuery = User.find().select('name avatarUrl articlesAmount');

  const [totalAuthors, authors] = await Promise.all([
    authorsQuery.clone().countDocuments(),
    authorsQuery.skip(skip).limit(limit),
  ]);

  const totalPages = Math.ceil(totalAuthors / limit);

  res.status(200).json({ page, limit, totalPages, totalAuthors, authors });
};
