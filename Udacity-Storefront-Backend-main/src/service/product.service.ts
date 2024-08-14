/* eslint-disable no-useless-catch */
import { myDataSource } from '../config/data-source';
import { Product } from '../entity/product.entity';
export class ProductService {
  private static readonly userRepository = myDataSource.getRepository(Product);

  public static async create(body: Product): Promise<Product> {
    try {
      const create = this.userRepository.create(body);
      return await this.userRepository.save(create);
    } catch (error) {
      throw error;
    }
  }
  public static async index(): Promise<Product[]> {
    try {
      return this.userRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public static async show(id: string): Promise<Product> {
    try {
      const data = await this.userRepository.findOneBy({ id: +id });
      return data;
    } catch (error) {
      throw error;
    }
  }

  public static async indexRaw(id: string): Promise<Product> {
    try {
      return this.userRepository.findOneBy({ id: +id });
    } catch (error) {
      throw error;
    }
  }

  public static async update(
    id: number,
    body: Partial<Product>
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
}
