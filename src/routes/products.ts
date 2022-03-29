import { Router } from 'express';
import ProductController from '../controllers/products';
import validate from '../middlewares/validate';

const router = Router();

const productController = new ProductController();

router.get('', productController.getAll);

router.post('', validate.productCreation, productController.create);

export default router;
