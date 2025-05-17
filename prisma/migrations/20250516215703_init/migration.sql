/*
  Warnings:

  - The primary key for the `NGO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CitizenId` on the `NGO` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[NGOId]` on the table `NGO` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "NGO_CitizenId_key";

-- AlterTable
ALTER TABLE "NGO" DROP CONSTRAINT "NGO_pkey",
DROP COLUMN "CitizenId",
ADD COLUMN     "NGOId" SERIAL NOT NULL,
ADD CONSTRAINT "NGO_pkey" PRIMARY KEY ("NGOId");

-- CreateIndex
CREATE UNIQUE INDEX "NGO_NGOId_key" ON "NGO"("NGOId");
