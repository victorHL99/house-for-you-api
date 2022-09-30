import Joi from 'joi';
import { CreateAnnouncement } from '../types/announcementInterface';

export const createAnnouncementSchema = Joi.object<CreateAnnouncement>({
  value: Joi.number().required(),
  number_house: Joi.number().required(),
  description: Joi.string().required(),
  area: Joi.number().required(),
  bedrooms: Joi.number().required(),
  garage: Joi.number().required(),
  bathrooms: Joi.number().required(),
  phone_number: Joi.string().required(),
  address: Joi.string().required(),
});

const announcementSchema = {
  createAnnouncementSchema,
};

export default announcementSchema;
