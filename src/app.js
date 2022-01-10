import express from 'express';
import morgan from 'morgan';

import AuthRoutes from './routes/Auth.routes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use(morgan('combined'));

app.use('/api/v1', AuthRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
