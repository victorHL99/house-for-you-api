import { Request, Response } from 'express';
import { Signin, Signup } from '../types/userInterfaces';

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

async function login(req: Request, res: Response) {
  const { email, password } = req.body as Signin;
  const action: string = 'login';
  const JWT_KEY = process.env.JWT_SECRET_KEY as string;

  const user = await authService.verifyEmailExists(email, action);
  await authService.comparePassword(password, user?.password);
  const token = await authService.generateToken(user?.email, JWT_KEY);
  await authService.updateToken(user?.id, token);

  res.locals.token = token;

  res.status(200).send({ message: 'User logged in', token });
}

const authController = {
  signup,
};

export default authController;
