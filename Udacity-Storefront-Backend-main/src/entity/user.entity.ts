import bcrypt from 'bcrypt';
import {
  AfterInsert,
  AfterLoad,
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, name: 'first_name' })
  firstName: string;
  @Column({ nullable: true, name: 'last_name' })
  lastName: string;

  @Column()
  password: string;

  @OneToMany(() => Order, (order) => order.user)
  orders?: Order[];

  @BeforeInsert()
  private bycyptPassword() {
    this.password = bcrypt.hashSync(
      this.password,
      Number(process.env.HASH_SALT)
    );
  }

  @AfterInsert()
  @AfterLoad()
  private removePassword() {
    if (this.password) delete this.password;
  }
}
