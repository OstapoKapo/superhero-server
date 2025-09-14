import { Module } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { SuperheroController } from './superhero.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  providers: [SuperheroService, PrismaService, CloudinaryService],
  controllers: [SuperheroController],
  exports: [SuperheroService, PrismaService, CloudinaryService],
})
export class SuperheroModule {}
