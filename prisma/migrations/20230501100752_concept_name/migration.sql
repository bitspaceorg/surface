/*
  Warnings:

  - Added the required column `name` to the `Concept` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Concept" ADD COLUMN     "name" TEXT NOT NULL;
