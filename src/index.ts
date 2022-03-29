import app from './app';
import { notFound, globalErr } from './middlewares/error';
import productsRouter from './routes/products';

const PORT = 3000;

app.use('/products', productsRouter);

app.use('*', notFound);

app.use(globalErr);

const server = app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

export default server;
