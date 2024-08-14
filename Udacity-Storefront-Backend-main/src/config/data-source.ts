import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';

const config = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  logging: process.env.DB_LOGGING === 'true',
  database: process.env.DB_DATABASE,
};
console.log('DB config:', config);

export const dataSourceOption: DataSourceOptions = {
  type: 'postgres',
  ...config,
  entities: ['dist/**/**.entity{.ts,.js}'],
  migrations: ['dist/src/migration/**/*{.ts,.js}'],
  dropSchema: false,
  synchronize: false,
};

export const myDataSource = new DataSource(dataSourceOption);
