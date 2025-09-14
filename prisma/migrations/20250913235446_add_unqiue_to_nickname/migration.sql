/*
  Warnings:

  - A unique constraint covering the columns `[nickname]` on the table `Hero` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Hero_nickname_key" ON "public"."Hero"("nickname");
