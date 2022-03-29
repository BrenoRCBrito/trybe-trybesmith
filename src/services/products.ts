import ProductModel from '../models/products';
import connection from '../models/connection';
import Product from '../interfaces/product';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create({ name, amount }: Product): Promise<Product> {
    const product: Product = await this.model.create({ name, amount } as Product);
    return product;
  }
}
