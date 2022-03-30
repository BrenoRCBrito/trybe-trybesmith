import { Request, Response, NextFunction } from 'express';
import connection from '../models/connection';
import createToken from '../utils/createToken';

type UserId = [{ id: number }];

export default async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (typeof username !== 'string') {
    const noUserNameError = { code: 400, message: 'Username is required' };
    return next(noUserNameError);
  }
  if (typeof password !== 'string') {
    const noPasswordError = { code: 400, message: 'Password is required' };
    return next(noPasswordError);
  }
  const query = 'SELECT id FROM Trybesmith.Users WHERE username=? and password=?';
  const [userId] = await connection.execute(query, [username, password]);
  if (!(userId as UserId)[0]) {
    const invalidError = { code: 401, message: 'Username or password invalid' };
    return next(invalidError);
  }
  const token = createToken({ username, password });
  return res.status(200).json({ token });
};
