import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const query = 'SELECT id, userId FROM Trybesmith.Orders';
    const [orders] = await this.connection.execute(query);
    return orders as Order[];
  }

  // public async create({ products }: number[]): Promise<Order> {
  //   const query = 'INSERT INTO Trybesmith.Orders(name, amount) VALUES(?,?)';
  //   const [result] = await this.connection.execute<ResultSetHeader>(query, [products]);

  // }
}
