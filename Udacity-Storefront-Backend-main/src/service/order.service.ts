/* eslint-disable no-useless-catch */
import { Order } from '../entity/order.entity';
import { myDataSource } from '../config/data-source';
export class OrderService {
  private static readonly userRepository = myDataSource.getRepository(Order);

  public static async create(body: Partial<Order>): Promise<Order> {
    try {
      const create = this.userRepository.create(body);
      return await this.userRepository.save(create);
    } catch (error) {
      throw error;
    }
  }

  public static async show(id: number): Promise<Order> {
    try {
      return await this.userRepository.findOneBy({ id });
    } catch (error) {
      throw error;
    }
  }

  public static async update(
    id: number,
    body: Partial<Order>
  ): Promise<number> {
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

  public static async getByUserId(id: string): Promise<Order> {
    try {
      const data = await this.userRepository.findOne({
        where: { userId: +id },
        relations: ['products.product', 'user'],
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  public static async indexRaw(id: string): Promise<Order> {
    try {
      return this.userRepository.findOneBy({ id: +id });
    } catch (error) {
      throw error;
    }
  }
}
