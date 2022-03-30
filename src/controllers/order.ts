import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/order';
import Order from '../interfaces/order';

const { OK, CREATED } = StatusCodes;

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    return res.status(OK).json(orders);
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const { products } = req.body;
    const { id } = req.user;
    // const createdOrder = await this.orderService.create({
    //   id,
    // } as Order);
    try {
      await this.orderService.create({
        userId: id,
        products,
      } as Order);
      return res.status(CREATED).json({ order: { products, userId: id } });
    } catch (e) {
      next(e);
    }
  };
}
