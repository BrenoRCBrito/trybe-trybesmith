import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order';
import QueryResult from '../interfaces/orderQueryResult';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const query = `SELECT o.id, o.userId, GROUP_CONCAT(p.id) as products
    FROM Trybesmith.Orders as o
    INNER JOIN Trybesmith.Products as p
    ON o.id = p.orderId
    GROUP BY p.orderId
    ORDER BY o.userId`;
    const [orders] = await this.connection.execute(query);
    const formatedOrders = (orders as QueryResult[]).map((order) => ({
      ...order,
      products: order.products.split(',').map(Number),
    }));
    return formatedOrders;
  }

  // public async create({ products }: number[]): Promise<Order> {
  //   const query = 'INSERT INTO Trybesmith.Orders(name, amount) VALUES(?,?)';
  //   const [result] = await this.connection.execute<ResultSetHeader>(query, [products]);

  // }
}
