import { Router } from 'express';
import validateSchema from '../middlewares/validateSchema';
import validateToken from '../middlewares/validateToken';
import announcementSchema from '../schemas/announcementSchema';
import announcementController from '../controllers/announcementController';

const announcementsRouter = Router();

announcementsRouter.post(
  '/announcements',
  validateToken,
  // validateSchema(announcementSchema.createAnnouncementSchema),
  announcementController.createAnnouncement,
);
export default announcementsRouter;
