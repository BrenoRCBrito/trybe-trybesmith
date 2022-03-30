import User from '../interfaces/user';

declare global {
  namespace Express {
    interface Request {
      user?: Record<User>;
    }
  }
}
