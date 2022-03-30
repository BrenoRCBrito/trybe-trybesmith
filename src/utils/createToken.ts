import { sign } from 'jsonwebtoken';
import User from '../interfaces/user';

export default (data: User) =>
  sign({ data }, 'segredo', { expiresIn: '7d', algorithm: 'HS256' });
