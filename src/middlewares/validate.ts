import { Request, NextFunction, Response } from 'express';
import { isError } from 'joi';
import { order, product, user } from '../utils/joiSchemas';

const formatError = (error: unknown) => {
  const unknownError = { error: 'Unknown Error' };
  if (isError(error)) {
    return {
      message: error.message,
      code: error.details[0].type === 'any.required' ? 400 : 422,
    };
  }
  return unknownError;
};

const productCreation = async (req: Request, _res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  try {
    await product.validateAsync({ name, amount });
  } catch (e) {
    next(formatError(e));
  }
  return next();
};

const userCreation = async (req: Request, _res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  try {
    await user.validateAsync({ username, classe, level, password }, { convert: false });
  } catch (e) {
    next(formatError(e));
  }
  return next();
};

const orderCreation = async (req: Request, _res: Response, next: NextFunction) => {
  const { products } = req.body;
  try {
    await order.validateAsync({ products }, { convert: false });
  } catch (e) {
    console.log(e);
    next(formatError(e));
  }
  return next();
};

export default { productCreation, userCreation, orderCreation };
