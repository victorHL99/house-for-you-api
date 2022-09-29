/*
  Warnings:

  - You are about to drop the column `announcement` on the `pictures` table. All the data in the column will be lost.
  - Added the required column `announcementId` to the `pictures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pictures" DROP COLUMN "announcement",
ADD COLUMN     "announcementId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "pictures" ADD CONSTRAINT "pictures_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
