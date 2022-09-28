import { Request, Response } from 'express';
import { Signup } from '../types/userInterfaces';

import authService from '../services/authService';

async function signup(req: Request, res: Response) {
  // TODO implement signup
  const { name, last_name, email, password, profile_image } =
    req.body as Signup;
  const action = 'signup';

  await authService.verifyEmailExists(email, action);
}

const authController = {
  signup,
};

export default authController;
