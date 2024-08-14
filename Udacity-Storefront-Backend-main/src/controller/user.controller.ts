import { User } from '../entity/user.entity';
import { UserService } from '../service/user.service';
import { plainToInstance } from 'class-transformer';
import { Request, Response } from 'express';

export class UserController {
  public static login = async (req: Request, res: Response) => {
    const { firstName = null, password = null } = req.body;
    const token = await UserService.login({ firstName, password });
    if (token) res.status(200).send({ token });
    else res.status(404).send('User not found');
  };

  public static create = async (req: Request, res: Response) => {
    const body: User = plainToInstance(User, req.body);
    const create = await UserService.create(body);
    res.status(200).send(create);
  };

  public static index = async (req: Request, res: Response) => {
    const data = await UserService.index();
    res.status(200).send(data);
  };

  public static show = async (req: Request, res: Response) => {
    const data = await UserService.show(req?.params?.id);
    res.status(200).send(data);
  };
}
