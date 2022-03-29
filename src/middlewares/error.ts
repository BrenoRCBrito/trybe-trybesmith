import { Request, Response, NextFunction } from 'express';

type CustomError = {
  code: number;
  message: string;
};

export const notFound = (_req: Request, _res: Response, next: NextFunction) =>
  next({ code: 404, error: 'Opsss router not found' });

export const globalErr = (
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err.code) return res.status(err.code).json({ error: err.message });
  return res.status(500).json({ error: err.message });
};
