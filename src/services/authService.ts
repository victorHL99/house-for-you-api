import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

const authService = {
  verifyEmailExists,
};

export default authService;
