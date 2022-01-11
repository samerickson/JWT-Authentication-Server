import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import verifyToken from './middleware/auth.middleware.js';

import AuthRoutes from './routes/Auth.routes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));

app.use('/api/v1', AuthRoutes);

app.get('/', (_req, res) => {
    res.json({ message: "🔭 -- Server is running!"});
});

app.get('/auth', verifyToken, (_req, res) => {
    res.json({message: "hit authenticated route"});
});

app.use(notFound);
app.use(errorHandler);

export default app;
