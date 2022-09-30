import jwt from 'jsonwebtoken';
import announcementRepository from '../repositories/announcementRepository';
import { CreateAnnouncement } from '../types/announcementInterface';

async function decryptToken(token: string) {
  const decoded: any = jwt.verify(token, process.env.JWT_SECRET_KEY);

  return decoded.email;
}

async function getUserId(email: string) {
  const id = await announcementRepository.getUserByEmail(email);

  return id;
}

async function createAnnouncement(announcement: CreateAnnouncement) {
  await announcementRepository.createAnnouncement(announcement);
}

const announcementService = {
  decryptToken,
  getUserId,
  createAnnouncement,
};

export default announcementService;
