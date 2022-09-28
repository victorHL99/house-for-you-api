import { Router } from 'express';

import validateSchema from '../middlewares/validateSchema';
import authController from '../controllers/authController';
import authSchema from '../schemas/authSchema';

const authRouter = Router();

authRouter.post(
  '/signup',
  validateSchema(authSchema.signupSchema),
  authController.signup,
);
authRouter.post(
  '/login',
  validateSchema(authSchema.signinSchema),
  authController.login,
);

export default authRouter;
