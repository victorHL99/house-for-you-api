import { Router } from 'express';
import validateToken from '../middlewares/validateToken';
import userController from '../controllers/userController';

const userRouter = Router();

userRouter.get('/', validateToken, userController.getUser);

export default userRouter;
