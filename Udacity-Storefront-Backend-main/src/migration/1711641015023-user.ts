import { User } from '../entity/user.entity';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export const UserTableName = 'user';
export class Users1711641015023 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: UserTableName,
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
            name: 'first_name',
            isUnique: true,
            type: 'character varying',
          },
          {
            name: 'last_name',
            type: 'character varying',
          },
          {
            name: 'password',
            type: 'character varying',
          },
        ],
      })
    );

    await queryRunner.manager.insert(User, [
      {
        firstName: 'admin',
        lastName: 'admin',
        password:
          '$2b$10$oOjTRZCuMZaYBXLQ3ZtSQO6MNdtib8Is7ENSjVdKqN0wH7rPoSR92',
      },
      {
        firstName: 'user',
        lastName: 'user',
        password:
          '$2b$10$XntF8lAQJMPtWVjmv/FbTudmC328NaiCU.fTdry6GQ0lbeGHYwkiO',
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(UserTableName);
  }
}
