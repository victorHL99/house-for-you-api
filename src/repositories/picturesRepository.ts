import client from '../config/database';
import { CreatePicture } from '../types/picturesInterface';

async function getUserByEmail(email: string) {
  const user = await client.user.findFirst({
    where: {
      email,
    },
  });

  return user.id;
}

async function getAnnouncementById(id: number) {
  const announcement = await client.announcement.findFirst({
    where: {
      id,
    },
  });

  return announcement;
}

async function createPicture(picture: CreatePicture) {
  await client.picture.create({
    data: picture,
  });
}

async function getPictureByAnnoucementId(id: number) {
  const pictures = await client.picture.findMany({
    where: {
      announcementId: id,
    },
  });

  return pictures;
}

const picturesRepository = {
  getUserByEmail,
  getAnnouncementById,
  createPicture,
  getPictureByAnnoucementId,
};

export default picturesRepository;
