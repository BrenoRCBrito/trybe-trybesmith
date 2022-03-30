import { Router } from 'express';
import OrderController from '../controllers/order';
import auth from '../middlewares/auth';
import validate from '../middlewares/validate';

const router = Router();

const orderController = new OrderController();

router.get('', orderController.getAll);

router.post('', auth, validate.orderCreation, orderController.create);

export default router;
