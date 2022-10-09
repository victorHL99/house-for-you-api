import { Request, Response } from 'express';
import { CreatePicture } from '../types/picturesInterface';
import decryptToken from '../utils/decryptToken';
import picturesService from '../services/picturesService';
import picturesRepository from '../repositories/picturesRepository';

async function createPictures(req: Request, res: Response) {
  const token = req.headers.authorization.split(' ')[1];
  const { photos, announcementId } = req.body as CreatePicture;

  // get userId from token
  const email = await decryptToken(token);
  const userId = await picturesService.getUserId(email);

  // verify if userId is the same as the userId from the announcement
  await picturesService.verifyUserId(userId, announcementId);

  //  create object with the photos and the announcementId
  const picture = {
    photos,
    announcementId,
  };

  // create pictures
  await picturesRepository.createPicture(picture);

  res.sendStatus(201);
}

const picturesController = {
  createPictures,
};

export default picturesController;
