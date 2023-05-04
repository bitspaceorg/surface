/*
  Warnings:

  - Added the required column `xMouse` to the `UserConcept` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yMouse` to the `UserConcept` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Concept" ALTER COLUMN "metadata" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "UserConcept" ADD COLUMN     "xMouse" INTEGER NOT NULL,
ADD COLUMN     "yMouse" INTEGER NOT NULL;
