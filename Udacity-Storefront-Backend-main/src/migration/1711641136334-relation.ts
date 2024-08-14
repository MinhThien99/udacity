import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { UserTableName } from './1711641015023-user';
import { OrderTableName } from './1711641078177-order';
import { ProductTableName } from './1711641058910-product';
import { OrderProductTableName } from './1711641109673-order_product';

export class Relation1711641136334 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      OrderTableName,
      new TableForeignKey({
        referencedTableName: UserTableName,
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        name: 'fk_user_order',
      })
    );

    await queryRunner.createForeignKey(
      OrderProductTableName,
      new TableForeignKey({
        referencedTableName: OrderTableName,
        columnNames: ['order_id'],
        referencedColumnNames: ['id'],
        name: 'fk_order_orderdetail',
      })
    );

    await queryRunner.createForeignKey(
      OrderProductTableName,
      new TableForeignKey({
        referencedTableName: ProductTableName,
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        name: 'fk_product_orderdetail',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      OrderProductTableName,
      'fk_order_orderdetail'
    );
    await queryRunner.dropForeignKey(
      OrderProductTableName,
      'fk_product_orderdetail'
    );
    await queryRunner.dropForeignKey(OrderTableName, 'fk_user_order');
  }
}
