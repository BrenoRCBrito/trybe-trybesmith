import { Request, Response, NextFunction } from 'express';

type CustomError = {
  status: number;
  error: string;
};

export const globalErr = (err: CustomError, _req: Request, res: Response) => {
  const { status, error } = err as CustomError;
  if (status) return res.status(status).json({ error });
  return res.status(500).json({ error });
};

export const notFound = (next: NextFunction) =>
  next({ status: 404, error: 'Opsss router not found' });
