import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
export const authorize = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req?.headers?.authorization?.split(' ')[1];
    const decoded = jwt.verify(token, process.env.TOKEN_SECRECT);
    if (decoded) next();
    else res.status(401).send('Unauthorized.');
  } catch (error) {
    res.status(401).send('Unauthorized.');
  }
};
