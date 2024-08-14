import { DataSource } from 'typeorm';
import supertest from 'supertest';
import app from '../index';
import { dataSourceOption } from '../config/data-source';

const request = supertest(app);
const dataSource = new DataSource(dataSourceOption);
describe('--- Endpoint Order', () => {
  beforeAll(async () => await dataSource.connect());
  afterAll(async () => await dataSource.close());
  it('1. Get Order by userId', async () => {
    const response = await request.get('/api/order/1');
    expect(response.body).toBeDefined();
  });
});
