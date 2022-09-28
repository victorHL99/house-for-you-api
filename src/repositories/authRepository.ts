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

// use upsert for update or create
async function updateToken(id: number, token: string) {
  await client.session.upsert({
    where: {
      userId: id,
    },
    update: {
      token,
    },
    create: {
      token,
      userId: id,
    },
  });
}

const authRepository = {
  getUserByEmail,
  createUser,
  updateToken,
};

export default authRepository;
