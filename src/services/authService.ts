import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import authRepository from '../repositories/authRepository';

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

const authService = {
  verifyEmailExists,
  encryptPassword,
};

export default authService;
