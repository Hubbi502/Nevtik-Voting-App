/*
  Warnings:

  - You are about to drop the column `proker` on the `candidate` table. All the data in the column will be lost.
  - You are about to drop the column `categorie` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `candidate` DROP COLUMN `proker`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `categorie`;
