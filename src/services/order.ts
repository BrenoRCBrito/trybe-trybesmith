import OrderModel from '../models/order';
import connection from '../models/connection';
import Order from '../interfaces/order';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  public async create({ userId, products }: Order): Promise<number> {
    // const order: Order = await this.model.create({ userId } as Order);
    // return order;
    const id = await this.model.create({ userId, products } as Order);
    return id;
  }
}
