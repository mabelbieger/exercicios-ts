import { NextFunction, Request, Response } from 'express';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error('Erro capturado:', err);

  res.status(err.status || 500).json({
    error: err.message || 'Erro interno no servidor',
    code: err.status || 500,
  });
}
