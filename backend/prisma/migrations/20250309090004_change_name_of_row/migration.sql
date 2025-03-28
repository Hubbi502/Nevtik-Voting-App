/*
  Warnings:

  - You are about to drop the column `kelas` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `nis` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_nis_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `kelas`,
    DROP COLUMN `nis`,
    ADD COLUMN `divisi` VARCHAR(191) NULL DEFAULT '',
    ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
