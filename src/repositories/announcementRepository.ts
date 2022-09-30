import client from '../config/database';
import { CreateAnnouncement } from '../types/announcementInterface';

async function getUserByEmail(email: string) {
  const user = await client.user.findFirst({
    where: {
      email,
    },
  });

  return user.id;
}

async function createAnnouncement(announcement: CreateAnnouncement) {
  await client.announcement.create({
    data: announcement,
  });
}
const announcementRepository = {
  getUserByEmail,
  createAnnouncement,
};

export default announcementRepository;
