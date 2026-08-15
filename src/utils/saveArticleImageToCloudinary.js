import { randomUUID } from 'node:crypto';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const saveArticleImageToCloudinary = buffer => {
  const options = {
    folder: 'students-app/articles',
    public_id: `article_${randomUUID()}`,
    resource_type: 'image',
    overwrite: false,
    unique_filename: false,
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    transformation: [
      {
        width: 1200,
        height: 1200,
        crop: 'limit',
      },
      {
        fetch_format: 'auto',
        quality: 'auto',
      },
    ],
  };

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      },
    );

    uploadStream.end(buffer);
  });
};