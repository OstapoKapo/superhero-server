import { Module } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { SuperheroController } from './superhero.controller';

@Module({
  providers: [SuperheroService],
  controllers: [SuperheroController]
})
export class SuperheroModule {}
