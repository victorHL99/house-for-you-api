import Joi from 'joi';
import { CreatePicture } from '../types/picturesInterface';

export const picturesSchema = Joi.object<CreatePicture>({
  announcementId: Joi.number().required(),
  photos: Joi.string().required().uri(),
});
