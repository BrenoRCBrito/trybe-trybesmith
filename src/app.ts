import express from 'express';
import { notFound, globalErr } from './middlewares/error';
import productsRouter from './routes/products';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('*', notFound);

app.use(globalErr);

export default app;
