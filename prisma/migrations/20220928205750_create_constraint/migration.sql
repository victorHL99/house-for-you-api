/*
  Warnings:

  - A unique constraint covering the columns `[userId,token]` on the table `sessions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "sessions_userId_token_key" ON "sessions"("userId", "token");
