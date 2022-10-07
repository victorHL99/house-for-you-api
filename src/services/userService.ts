import jwt from 'jsonwebtoken';
import userRepository from '../repositories/userRepository';

async function getUserFromToken(token: string) {
  const decoded: any = jwt.verify(token, process.env.JWT_SECRET_KEY);

  const email = decoded.email;

  const id = await userRepository.getUserByEmail(email);

  return id;
}

const userService = {
  getUserFromToken,
};

export default userService;
