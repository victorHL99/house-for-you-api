import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import authRepository from '../repositories/authRepository';
import { Signup } from '../types/userInterfaces';

async function verifyEmailExists(email: string, action: string) {
  const user = await authRepository.getUserByEmail(email);

  if (action === 'signup') {
    if (user) {
      throw {
        type: 'conflict',
        message: 'Email already exists',
      };
    }
  }

  if (action === 'login') {
    if (!user) {
      throw {
        type: 'not_found',
        message: 'Email not found',
      };
    }
  }

  return user;
}

async function encryptPassword(password: string) {
  const salt = 10;

  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}

async function createUser(user: Signup) {
  await authRepository.createUser(user);
}

const authService = {
  verifyEmailExists,
  encryptPassword,
  createUser,
};

export default authService;
