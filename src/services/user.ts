import User from '../interfaces/user';
import connection from '../models/connection';
import UserModel from '../models/user';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create({ username, classe, level, password }: User): Promise<string> {
    const token = await this.model.create({ username, classe, level, password });
    return token;
  }
}
