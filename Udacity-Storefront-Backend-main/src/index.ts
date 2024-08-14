// src/index.js
import express, { Express } from 'express';
import indexRouter from './router/';
import 'dotenv/config';
import { myDataSource } from './config/data-source';
import bodyParser from 'body-parser';

const app: Express = express();

myDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.use(bodyParser.json());
    app.use('/', indexRouter);

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.info(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

export default app;
