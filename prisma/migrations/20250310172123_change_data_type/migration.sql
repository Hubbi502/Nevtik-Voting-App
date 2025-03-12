/*
  Warnings:

  - Added the required column `divisi` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `candidate` ADD COLUMN `divisi` VARCHAR(191) NOT NULL;
