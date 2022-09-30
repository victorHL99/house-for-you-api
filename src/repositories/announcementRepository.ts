import client from '../config/database';

async function getUserByEmail(email: string) {
  const user = await client.user.findFirst({
    where: {
      email,
    },
  });

  return user.id;
}

const announcementRepository = {
  getUserByEmail,
};

export default announcementRepository;
