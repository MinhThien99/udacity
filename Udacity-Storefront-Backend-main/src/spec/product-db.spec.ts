import { Product } from '../entity/product.entity';
import supertest from 'supertest';
import { DataSource } from 'typeorm';
import { dataSourceOption } from '../config/data-source';
import app from '../index';
import { ProductService } from '../service/product.service';
supertest(app);
const dataSource = new DataSource(dataSourceOption);
dataSource.getRepository(Product);

describe('--- Database Product Services', () => {
  beforeAll(async () => await dataSource.connect());
  afterAll(async () => await dataSource.close());

  let id: number = null;

  it('1. Create Product', async () => {
    const res = await ProductService.create({
      name: 'test db product',
      price: 1000,
      category: ['test'],
      id: 100,
    });
    id = res.id;
    console.log('created id: ', id);
    expect(res.id).toBe(id);
  });

  it('2. Get Product by id ', async () => {
    console.log('id: ', id);
    const res = await ProductService.show(`${id}`);
    expect(res.id).toBe(id);
  });

  it('3. Update product ', async () => {
    console.log('id: ', id);
    const effect = await ProductService.update(id, {
      name: 'test db product updated',
    });
    expect(effect).toBe(1);
  });

  it('4. Delete Product', async () => {
    console.log('id: ', id);
    const effect = await ProductService.delete(id);
    expect(effect).toBe(1);
  });
});
