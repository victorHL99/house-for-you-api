/*
  Warnings:

  - Added the required column `address` to the `announcements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "announcements" ADD COLUMN     "address" TEXT NOT NULL;
