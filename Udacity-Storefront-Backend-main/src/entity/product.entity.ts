import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  price: number;

  @Column('simple-json', {
    nullable: true,
    name: 'category',
  })
  category: string[];
}
