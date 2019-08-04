import { Request, Response } from 'express';

export const getServerHealthStatus = (_: Request, response: Response) =>
  response.status(200).json({ message: 'Everything is fine :)' });
