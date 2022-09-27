import { Router } from 'express';

import validateSchema from '../middlewares/validateSchema';
import signupSchema from '../schemas/authSchema';

const authRouter = Router();

authRouter.post('/signup', validateSchema(signupSchema));

export default authRouter;
