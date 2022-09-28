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

async function comparePassword(password: string, hashedPassword: string) {
  const isMatch = await bcrypt.compare(password, hashedPassword);

  if (!isMatch) {
    throw {
      type: 'bad_request',
      message: 'User or password incorrect',
    };
  }
}

async function generateToken(email: string, JWT_KEY: string) {
  const token = jwt.sign({ email }, JWT_KEY, { expiresIn: '1h' });

  return token;
}

async function updateToken(id: number, token: string) {
  await authRepository.updateToken(id, token);
}

const authService = {
  verifyEmailExists,
  encryptPassword,
  createUser,
  comparePassword,
  generateToken,
  updateToken,
};

export default authService;
