import { Router } from 'express';

import authRouter from './authRouter';
import announcementsRouter from './announcementsRoutes';
import userRouter from './userRoutes';

const routes = Router();

routes.use(authRouter);
routes.use('/home', announcementsRouter);
routes.use('/user', userRouter);

export default routes;
