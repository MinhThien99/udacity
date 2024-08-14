import { OrderProduct } from '../entity/order-product.entity';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';
export const OrderProductTableName = 'order_product';

export class OrderProduct1711641109673 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: OrderProductTableName,
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
            name: 'order_id',
            type: 'integer',
          },
          {
            name: 'product_id',
            type: 'integer',
          },
          {
            name: 'quantity',
            type: 'integer',
          },
        ],
      })
    );

    await queryRunner.manager.insert(OrderProduct, [
      { orderId: 1, productId: 1, quantity: 1 },
      { orderId: 2, productId: 1, quantity: 2 },
      { orderId: 3, productId: 1, quantity: 1 },
      { orderId: 3, productId: 2, quantity: 1 },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(OrderProductTableName);
  }
}
