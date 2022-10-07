import client from '../config/database';

async function getUserByEmail(email: string) {
  const user = await client.user.findFirst({
    where: {
      email,
    },
  });

  return user;
}

const userRepository = {
  getUserByEmail,
};

export default userRepository;
