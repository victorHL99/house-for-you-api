import { Router } from 'express';
import validateSchema from '../middlewares/validateSchema';
import validateToken from '../middlewares/validateToken';
import picturesController from '../controllers/picturesController';
import { picturesSchema } from '../schemas/picturesSchema';

const picturesRouter = Router();

picturesRouter.post(
  '/',
  validateToken,
  validateSchema(picturesSchema),
  picturesController.createPictures,
);

picturesRouter.get(
  '/:id',
  validateToken,
  picturesController.getPicturesByAnnoucementId,
);

export default picturesRouter;
