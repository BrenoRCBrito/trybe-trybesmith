import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/order';

const { OK } = StatusCodes;

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    return res.status(OK).json(orders);
  };
}
