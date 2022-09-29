-- CreateTable
CREATE TABLE "announcements" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "number_house" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "garage" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "phone_number" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "announcements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "announcements_number_house_key" ON "announcements"("number_house");
