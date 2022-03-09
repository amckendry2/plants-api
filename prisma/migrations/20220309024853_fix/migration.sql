/*
  Warnings:

  - You are about to drop the `PlantsOnOrders` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `plantId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PlantsOnOrders" DROP CONSTRAINT "PlantsOnOrders_orderId_fkey";

-- DropForeignKey
ALTER TABLE "PlantsOnOrders" DROP CONSTRAINT "PlantsOnOrders_plantId_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "plantId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "PlantsOnOrders";

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
