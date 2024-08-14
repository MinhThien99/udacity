import supertest from 'supertest';
import { DataSource } from 'typeorm';
import { dataSourceOption } from '../config/data-source';
import app from '../index';
import { Order } from '../entity/order.entity';
import { OrderService } from '../service/order.service';
supertest(app);
const dataSource = new DataSource(dataSourceOption);
dataSource.getRepository(Order);

describe('--- Database Order Services', () => {
  beforeAll(async () => await dataSource.connect());
  afterAll(async () => await dataSource.close());

  let id: number = null;

  it('1. Create Order', async () => {
    const res = await OrderService.create({
      status: 1,
      userId: 1,
    });
    id = res.id;
    console.log('created id: ', id);
    expect(res.id).toBe(id);
  });

  it('2. Get Order by id: ', async () => {
    console.log('id: ', id);
    const res = await OrderService.show(id);
    expect(res.id).toBe(id);
  });

  it('3. Update Order: ', async () => {
    console.log('id: ', id);
    const res = await OrderService.update(id, { status: 2 });
    expect(res).toBe(1);
  });

  it('4. Delete Order: ', async () => {
    console.log('id: ', id);
    const res = await OrderService.delete(id);
    expect(res).toBe(1);
  });
});
