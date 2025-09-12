-- CreateTable
CREATE TABLE "public"."Hero" (
    "id" SERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "real_name" TEXT NOT NULL,
    "origin_description" TEXT NOT NULL,
    "superpowers" TEXT NOT NULL,
    "catch_phrase" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HeroImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "heroId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HeroImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."HeroImage" ADD CONSTRAINT "HeroImage_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "public"."Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
