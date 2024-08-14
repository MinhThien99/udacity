import { Product } from '../entity/product.entity';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export const ProductTableName = 'product';

export class Product1711641058910 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: ProductTableName,
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'character varying',
          },
          {
            name: 'price',
            type: 'integer',
          },
          {
            name: 'category',
            type: 'character varying',
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.manager.insert(Product, [
      {
        name: 'Iphone 15',
        price: 1000,
        category: ['Phone', 'Iphone'],
      },
      {
        name: 'Iphone 15 Pro',
        price: 1500,
        category: ['Phone', 'Iphone'],
      },
      {
        name: 'Iphone 15 Pro Max',
        price: 2000,
        category: ['Phone', 'Iphone'],
      },
      {
        name: 'Samsung s24',
        price: 1000,
        category: ['Phone', 'Samsung'],
      },
      {
        name: 'Samsung s24 Ultra',
        price: 1000,
        category: ['Phone', 'Samsung'],
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(ProductTableName);
  }
}
