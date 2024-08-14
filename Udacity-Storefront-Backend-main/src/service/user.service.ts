/* eslint-disable no-useless-catch */
import { classToPlain } from 'class-transformer';
import { myDataSource } from '../config/data-source';
import { User } from '../entity/user.entity';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
export class UserService {
  private static readonly userRepository = myDataSource.getRepository(User);

  static async login({
    firstName,
    password,
  }: {
    firstName: string;
    password: string;
  }): Promise<string> {
    try {
      const user = await UserService.indexRaw(firstName);
      const compare = await bcrypt.compare(password, user.password);
      delete user.password;
      if (compare) {
        return jwt.sign(classToPlain(user), process.env.TOKEN_SECRECT, {
          expiresIn: '18000s',
        });
      } else return null;
    } catch (error) {
      throw error;
    }
  }

  public static async create(body: Partial<User>): Promise<User> {
    try {
      const create = this.userRepository.create(body);
      return await this.userRepository.save(create);
    } catch (error) {
      throw error;
    }
  }

  public static async index(): Promise<User[]> {
    try {
      return this.userRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public static async show(id: string): Promise<User> {
    try {
      const data = await this.userRepository.findOne({
        where: { id: +id },
        // relations: ['orders'],
      });
      delete data.password;
      return data;
    } catch (error) {
      throw error;
    }
  }

  public static async indexRaw(name: string): Promise<User> {
    try {
      return (
        (
          await myDataSource.query<User[]>(
            `SELECT id, first_name, last_name, "password" FROM public."user" WHERE first_name='${name}' limit 1`
          )
        )?.at(0) || null
      );
    } catch (error) {
      throw error;
    }
  }

  public static async findByName(firstName: string): Promise<User> {
    try {
      return this.userRepository.findOne({ where: { firstName } });
    } catch (error) {
      throw error;
    }
  }

  public static async update(id: number, body: Partial<User>): Promise<number> {
    try {
      return (await this.userRepository.update({ id }, body))?.affected;
    } catch (error) {
      throw error;
    }
  }

  public static async delete(id: number): Promise<number> {
    try {
      return (await this.userRepository.delete({ id }))?.affected;
    } catch (error) {
      throw error;
    }
  }
}
