import client from '../config/database';
import { Signup } from '../types/userInterfaces';

async function getUserByEmail(email: string) {
  const user = await client.user.findFirst({
    where: {
      email,
    },
  });

  return user;
}

async function createUser(user: Signup) {
  await client.user.create({
    data: user,
  });
}

const authRepository = {
  getUserByEmail,
  createUser,
};

export default authRepository;
