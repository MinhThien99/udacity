import { DataSource } from 'typeorm';
import supertest from 'supertest';
import app from '../index';
import { dataSourceOption } from '../config/data-source';

const request = supertest(app);
const dataSource = new DataSource(dataSourceOption);
describe('--- Endpoint Product', () => {
  beforeAll(async () => await dataSource.connect());
  afterAll(async () => await dataSource.close());
  it('1. Get all product', async () => {
    const response = await request.get('/api/product');
    expect(response.body?.length).toBeGreaterThan(0);
  });

  it('2. Get product id 1', async () => {
    const response = await request.get('/api/product/1');
    expect(response.status).toBe(200);
  });
});
