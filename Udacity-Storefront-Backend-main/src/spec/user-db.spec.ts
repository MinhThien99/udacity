import supertest from 'supertest';
import { DataSource } from 'typeorm';
import { dataSourceOption } from '../config/data-source';
import { User } from '../entity/user.entity';
import app from '../index';
import { UserService } from '../service/user.service';
supertest(app);
const dataSource = new DataSource(dataSourceOption);
dataSource.getRepository(User);

describe('--- Database User Services', () => {
  beforeAll(async () => await dataSource.connect());
  afterAll(async () => await dataSource.close());

  let id: number = null;

  it('1. Create user', async () => {
    const res = await UserService.create({
      firstName: 'user_test',
      lastName: 'user_test',
      password: 'user_test',
    });
    id = res.id;
    console.log('created id: ', id);
    expect(res.id).toBe(id);
  });

  it('2. Get user by id ', async () => {
    console.log('id: ', id);
    const res = await UserService.show(`${id}`);
    expect(res.id).toBe(id);
  });

  it('3. Update user ', async () => {
    console.log('id: ', id);
    const effected = await UserService.update(id, {
      lastName: 'lastName updated',
    });
    expect(effected).toBe(1);
  });

  it('4. Delete user', async () => {
    console.log('id: ', id);
    const effected = await UserService.delete(id);
    expect(effected).toBe(1);
  });
});
