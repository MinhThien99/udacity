import { ClassConstructor, plainToInstance } from 'class-transformer';
import { ValidationError, validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

export const validateQueryDto = (objClass: ClassConstructor<unknown>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const query = req?.query;
    const obj = plainToInstance(objClass, query);
    validate(obj as unknown as object).then((err: ValidationError[]) => {
      if (err.length > 0) {
        res.status(400).send({ status: 400, error: { validator: err?.at(0) } });
      } else {
        next();
      }
    });
  };
};
