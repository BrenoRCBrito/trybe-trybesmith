import ProductModel from '../model/products';
import connection from '../model/connection';
import Product from '../interfaces/product';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async create({ name, amount }: Product): Promise<Product> {
    const user: Product = await this.model.create({ name, amount } as Product);
    return user;
  }
}
