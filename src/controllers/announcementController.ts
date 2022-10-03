import { Request, Response } from 'express';
import announcementService from '../services/announcementService';
import { CreateAnnouncement } from '../types/announcementInterface';

async function createAnnouncement(req: Request, res: Response) {
  const {
    value,
    number_house,
    description,
    area,
    bedrooms,
    garage,
    bathrooms,
    phone_number,
    address,
  } = req.body;
  const token = req.headers.authorization.split(' ')[1] as string;

  // get userId from token
  const email = await announcementService.decryptToken(token);
  const userId = await announcementService.getUserId(email);

  // create announcement
  const announcement = {
    userId,
    value,
    number_house,
    description,
    area,
    bedrooms,
    garage,
    bathrooms,
    phone_number,
    address,
  } as CreateAnnouncement;

  // save announcement
  await announcementService.createAnnouncement(announcement);

  res.status(201).json({ message: 'Announcement created' });
}

async function getAllAnnouncements(req: Request, res: Response) {
  const announcements = await announcementService.getAllAnnouncements();

  res.status(200).json(announcements);
}

async function getAnnouncementById(req: Request, res: Response) {
  const ID = parseInt(req.params.id);

  const announcement = await announcementService.getAnnouncementById(ID);

  res.status(200).json(announcement);
}

const announcementController = {
  createAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
};

export default announcementController;
