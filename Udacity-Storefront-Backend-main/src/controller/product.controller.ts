import { plainToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { Product } from '../entity/product.entity';
import { ProductService } from '../service/product.service';

export class ProductController {
  public static create = async (req: Request, res: Response) => {
    const body: Product = plainToInstance(Product, req.body);
    const create = await ProductService.create(body);
    res.status(200).send(create);
  };

  public static index = async (req: Request, res: Response) => {
    const data = await ProductService.index();
    res.status(200).send(data);
  };

  public static show = async (req: Request, res: Response) => {
    const data = await ProductService.show(req?.params?.id);
    res.status(200).send(data);
  };
}
