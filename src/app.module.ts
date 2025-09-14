import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperheroModule } from './superhero/superhero.module';
import { PrismaModule } from './prisma/prisma.module';
import { CorrelationIdMiddleware } from './common/middleware/corellation-id.middleware';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';

@Module({
  imports: [SuperheroModule, PrismaModule, CloudinaryModule,
    MulterModule.register({
      storage: multer.memoryStorage(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CloudinaryService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer
      .apply(CorrelationIdMiddleware)
      .forRoutes('*');
  }
}
