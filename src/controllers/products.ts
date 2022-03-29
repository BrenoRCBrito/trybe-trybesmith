import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Product from '../interfaces/product';
import ProductService from '../services/products';

const { OK } = StatusCodes;

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (req: Request, res: Response) => {
    const users = await this.productService.getAll();
    res.status(OK).json(users);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const createdUser = await this.productService.create({
      name,
      amount,
    } as Product);
    res.status(OK).json(createdUser);
  };
}
