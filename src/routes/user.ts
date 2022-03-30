import { Router } from 'express';
import UserController from '../controllers/user';
import validate from '../middlewares/validate';

const router = Router();

const userController = new UserController();

router.post('', validate.userCreation, userController.create);

export default router;
