import { OrderService } from '../service/order.service';
import { Request, Response } from 'express';

export class OrderController {
  public static getByUserId = async (req: Request, res: Response) => {
    const order = await OrderService.getByUserId(req.params.userId);
    if (order) res.status(200).send(order);
    else res.status(404).send('Order not found');
  };
}
