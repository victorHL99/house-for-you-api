import { Router } from 'express';

import authRouter from './authRouter';
import announcementsRouter from './announcementsRoutes';

const routes = Router();

routes.use(authRouter);
routes.use('/home', announcementsRouter);

export default routes;
