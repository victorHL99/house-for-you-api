import picturesRepository from '../repositories/picturesRepository';
import { CreatePicture } from '../types/picturesInterface';

async function getUserId(email: string) {
  const id = await picturesRepository.getUserByEmail(email);

  return id;
}
async function verifyUserId(userId: number, announcementId: number) {
  const announcement = await picturesRepository.getAnnouncementById(
    announcementId,
  );

  if (announcement.userId !== userId) {
    throw {
      type: 'unauthorized',
      message: 'You are not authorized to do this',
    };
  }
}

async function createPicture(picture: CreatePicture) {
  await picturesRepository.createPicture(picture);
}

const picturesService = {
  getUserId,
  verifyUserId,
  createPicture,
};

export default picturesService;
