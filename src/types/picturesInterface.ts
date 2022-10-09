import { Picture } from '@prisma/client';

export type CreatePicture = Omit<Picture, 'id' | 'createdAt'>;
