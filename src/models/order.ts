import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async create({ userId, products }: Order): Promise<number> {
    const query = 'INSERT INTO Trybesmith.Orders(userId) VALUES(?);';
    const query2 = 'UPDATE Trybesmith.Products SET orderId=? WHERE id=?';
    console.log(userId);
    console.log('cheguei');
    const [result] = await this.connection.execute<ResultSetHeader>(query, [userId]);
    const { insertId: orderId } = result;
    console.log(products);
    products.forEach(async (productId) =>
      this.connection.execute(query2, [orderId, productId]),);
    console.log(orderId);
    return orderId;
  }
}
