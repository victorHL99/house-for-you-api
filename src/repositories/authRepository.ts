import client from '../config/database';

async function getUserByEmail(email: string) {
  const user = await client.user.findFirst({
    where: {
      email,
    },
  });

  return user;
}

const authRepository = {
  getUserByEmail,
};

export default authRepository;
