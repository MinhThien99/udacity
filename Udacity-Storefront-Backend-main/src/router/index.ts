import express from 'express';
import userRouter from './user.route';
import orderRouter from './order.route';
import productRouter from './product.route';

const indexRouter = express.Router();

indexRouter.use('/', userRouter);
indexRouter.use('/', orderRouter);
indexRouter.use('/', productRouter);
indexRouter.get('/health', (req, res) => {
  res.status(200).send('OK');
});

export default indexRouter;
