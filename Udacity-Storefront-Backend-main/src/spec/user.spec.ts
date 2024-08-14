import { DataSource } from 'typeorm';
import supertest from 'supertest';
import app from '../index';
import { dataSourceOption } from '../config/data-source';

const request = supertest(app);
const dataSource = new DataSource(dataSourceOption);
describe('--- Endpoint User', () => {
  beforeAll(async () => await dataSource.connect());
  afterAll(async () => await dataSource.close());
  it('1. Get Users', async () => {
    const { body: loginResponse } = await request.post('/api/user/login').send({
      firstName: 'admin',
      password: 'admin',
    });
    const response = await request
      .get('/api/user')
      .set('Authorization', 'Bearer ' + loginResponse.token);
    expect(response.body?.length).toBeGreaterThan(0);
  });

  it('2. Get User by id', async () => {
    const { body: loginResponse } = await request.post('/api/user/login').send({
      firstName: 'admin',
      password: 'admin',
    });
    const response = await request
      .get('/api/user/1')
      .set('Authorization', 'Bearer ' + loginResponse.token);
    expect(response.body.firstName).toBeDefined();
  });

  it('3. Create User', async () => {
    const { body: loginResponse } = await request.post('/api/user/login').send({
      firstName: 'admin',
      password: 'admin',
    });
    const name = 'testUser' + new Date().getTime();
    const create = await request
      .post('/api/user')
      .send({
        firstName: name,
        lastName: 'testUser',
        password: 'testUser',
      })
      .set('Authorization', 'Bearer ' + loginResponse.token);
    expect(create.body.firstName).toBe(name);
  });
});
