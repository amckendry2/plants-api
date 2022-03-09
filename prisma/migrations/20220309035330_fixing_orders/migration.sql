/*
  Warnings:

  - You are about to drop the column `purchaser` on the `Order` table. All the data in the column will be lost.
  - Added the required column `totalCost` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "purchaser",
ADD COLUMN     "totalCost" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;
