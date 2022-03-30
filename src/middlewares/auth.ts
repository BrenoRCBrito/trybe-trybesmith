import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';

export default async (req: Request, _res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) {
    const noTokenError = { code: 401, message: 'Token not found' };
    return next(noTokenError);
  }
  try {
    const { data } = verify(token, 'segredo') as JwtPayload;
    req.user = data;
    // console.log(data.username);
    // console.log(token);
    // console.log(req.headers);
    // console.log(data);
    console.log(req.user);
    return next();
  } catch (error) {
    const expiredTokenError = { code: 401, message: 'Invalid token' };
    next(expiredTokenError);
  }
};
