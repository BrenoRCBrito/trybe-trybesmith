import express from 'express';
import { notFound, globalErr } from './middlewares/error';
import productRouter from './routes/product';
import userRouter from './routes/user';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/users', userRouter);

app.use('*', notFound);

app.use(globalErr);

export default app;
