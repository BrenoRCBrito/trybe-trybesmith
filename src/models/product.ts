import { ResultSetHeader, Pool } from 'mysql2/promise';
import Product from '../interfaces/product';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const query = 'SELECT id, name, amount, orderId FROM Trybesmith.Products';
    const [products] = await this.connection.execute(query);
    return products as Product[];
  }

  public async create({ name, amount }: Product): Promise<Product> {
    const query = 'INSERT INTO Trybesmith.Products(name, amount) VALUES(?,?)';
    const [result] = await this.connection.execute<ResultSetHeader>(query, [
      name,
      amount,
    ]);
    const { insertId: id } = result;
    const insertedProduct = { id, name, amount };
    return insertedProduct as Product;
  }
}
