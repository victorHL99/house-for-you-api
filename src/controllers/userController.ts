import { Request, Response } from 'express';
import userService from '../services/userService';

async function getUser(req: Request, res: Response) {
  const token = req.headers.authorization.split(' ')[1];

  const user = await userService.getUserFromToken(token);

  res.status(200).json(user);

  //
}

const userController = {
  getUser,
};

export default userController;
