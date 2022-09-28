import { Request, Response } from 'express';
import { Signup } from '../types/userInterfaces';

import authService from '../services/authService';

async function signup(req: Request, res: Response) {
  const { name, last_name, email, password, profile_image } =
    req.body as Signup;
  const action: string = 'signup';

  await authService.verifyEmailExists(email, action);
  const hashedPassword: string = await authService.encryptPassword(password);

  const user = {
    name,
    last_name,
    email,
    password: hashedPassword,
    profile_image,
  };

  await authService.createUser(user);

  res.status(201).send('User created');
}

const authController = {
  signup,
};

export default authController;
