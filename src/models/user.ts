import { ResultSetHeader, Pool } from 'mysql2/promise';
import User from '../interfaces/user';
import createToken from '../utils/createToken';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create({ username, classe, level, password }: User): Promise<string> {
    const query = `INSERT INTO Trybesmith.Users(username, classe, level, password) 
      VALUES(?,?,?,?)`;
    await this.connection.execute<ResultSetHeader>(query, [
      username,
      classe,
      level,
      password,
    ]);
    const insertedUser = { username, classe, level, password };
    const token = createToken(insertedUser);
    return token;
  }
}
