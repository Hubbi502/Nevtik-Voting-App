/*
  Warnings:

  - Added the required column `jurusan` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kelas` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proker` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `candidate` ADD COLUMN `jurusan` VARCHAR(191) NOT NULL,
    ADD COLUMN `kelas` VARCHAR(191) NOT NULL,
    ADD COLUMN `proker` JSON NOT NULL;
