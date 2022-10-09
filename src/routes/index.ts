import { Router } from 'express';

import authRouter from './authRouter';
import announcementsRouter from './announcementsRoutes';
import userRouter from './userRoutes';
import picturesRouter from './picturesRoutes';

const routes = Router();

routes.use(authRouter);
routes.use('/home', announcementsRouter);
routes.use('/user', userRouter);
routes.use('/pictures', picturesRouter);

export default routes;
