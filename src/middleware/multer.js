import multer from 'multer';
import createHttpError from 'http-errors';

const imageFileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image/')) {
    cb(createHttpError(400, 'Only image files are allowed'));
    return;
  }

  cb(null, true);
};

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1 * 1024 * 1024,
  },
  fileFilter: imageFileFilter,
});