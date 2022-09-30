import { Announcement } from '@prisma/client';

export type CreateAnnouncement = Omit<Announcement, 'id' | 'createAt'>;
