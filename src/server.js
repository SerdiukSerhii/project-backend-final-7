import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import { errors } from 'celebrate';
import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import articlesRouter from './routes/articlesRoutes.js';
import categoriesRouter from './routes/categoriesRoutes.js';
import authorsRouter from './routes/authorsRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(
  cors({
    origin: process.env.FRONTEND_DOMAIN,
    methods: ['GET', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true,
  }),
);
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);
app.use(userRoutes);
app.use(articlesRouter);
app.use(authorsRouter);
app.use(categoriesRouter);

app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
