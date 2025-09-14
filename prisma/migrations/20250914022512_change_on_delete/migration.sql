-- DropForeignKey
ALTER TABLE "public"."HeroImage" DROP CONSTRAINT "HeroImage_heroId_fkey";

-- AddForeignKey
ALTER TABLE "public"."HeroImage" ADD CONSTRAINT "HeroImage_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "public"."Hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;
