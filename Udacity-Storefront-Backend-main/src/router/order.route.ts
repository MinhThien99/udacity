import express from 'express';
import { OrderController } from '../controller/order.controller';

const orderRouter = express.Router();

orderRouter.get('/api/order/:userId', OrderController.getByUserId);

export default orderRouter;
