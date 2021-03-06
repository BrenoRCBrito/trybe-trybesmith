import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Product from '../interfaces/product';
import ProductService from '../services/product';

const { OK, CREATED } = StatusCodes;

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const Products = await this.productService.getAll();
    return res.status(OK).json(Products);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const createdProduct = await this.productService.create({
      name,
      amount,
    } as Product);
    return res.status(CREATED).json({ item: createdProduct });
  };
}
