/*
  Warnings:

  - You are about to drop the column `photo` on the `Barber` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Barber" DROP COLUMN "photo";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "duration";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isAdmin";
