import { authorize } from '../middleware/authorize';
import { UserController } from '../controller/user.controller';
import express from 'express';

const userRouter = express.Router();

userRouter.post('/api/user/login', UserController.login);
userRouter.post('/api/user', authorize, UserController.create);
userRouter.get('/api/user', authorize, UserController.index);
userRouter.get('/api/user/:id', authorize, UserController.show);

export default userRouter;
