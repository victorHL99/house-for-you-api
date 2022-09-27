import { Router } from 'express';

import validateSchema from '../middlewares/validateSchema';
import authController from '../controllers/authController';
import signupSchema from '../schemas/authSchema';

const authRouter = Router();

authRouter.post('/signup', validateSchema(signupSchema), authController.signup);

export default authRouter;
