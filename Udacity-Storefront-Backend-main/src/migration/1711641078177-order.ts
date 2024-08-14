import { Order } from '../entity/order.entity';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export const OrderTableName = 'order';

export class Order1711641078177 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: OrderTableName,
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
            name: 'user_id',
            type: 'integer',
          },
          {
            name: 'status',
            type: 'integer',
          },
        ],
      })
    );

    await queryRunner.manager.insert(Order, [
      {
        status: 1,
        userId: 1, // admin
      },
      {
        status: 1,
        userId: 2, // user
      },
      {
        status: 1,
        userId: 2, // user
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(OrderTableName);
  }
}
