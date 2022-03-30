import express from 'express';
import { notFound, globalErr } from './middlewares/error';
import productRouter from './routes/product';
import userRouter from './routes/user';
import orderRouter from './routes/order';
import 'express-async-errors';
import login from './middlewares/login';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/users', userRouter);

app.use('/orders', orderRouter);

app.post('/login', login);

app.use('*', notFound);

app.use(globalErr);

export default app;
