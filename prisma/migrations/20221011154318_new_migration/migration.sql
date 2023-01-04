/*
  Warnings:

  - A unique constraint covering the columns `[announcementId,photos]` on the table `pictures` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pictures_announcementId_photos_key" ON "pictures"("announcementId", "photos");
