import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from '../../src/superhero/superhero.controller';

describe('SuperheroController', () => {
  let controller: SuperheroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
