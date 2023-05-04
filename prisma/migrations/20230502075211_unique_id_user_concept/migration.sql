/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `UserConcept` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[conceptId]` on the table `UserConcept` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserConcept_userId_key" ON "UserConcept"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserConcept_conceptId_key" ON "UserConcept"("conceptId");
