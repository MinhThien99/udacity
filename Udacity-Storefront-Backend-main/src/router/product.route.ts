import express from 'express';
import { ProductController } from '../controller/product.controller';
import { authorize } from '../middleware/authorize';

const productRouter = express.Router();

productRouter.post('/api/product', authorize, ProductController.create);
productRouter.get('/api/product', ProductController.index);
productRouter.get('/api/product/:id', ProductController.show);

export default productRouter;
