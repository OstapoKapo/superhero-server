import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroService } from '../../src/superhero/superhero.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { CreateHeroDto } from 'src/common/dto/create-change.dto';

describe('SuperheroService', () => {
  let service: SuperheroService;
  let prisma: { hero: { [K: string]: jest.Mock } };
  let cloudinary: Required<Pick<Record<keyof CloudinaryService, jest.Mock>, 'uploadFiles'>>;

  beforeEach(async () => {
    prisma = {
      hero: {
        findMany: jest.fn(),
        count: jest.fn(),
        findUnique: jest.fn(),
        findFirst: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };

    cloudinary = {
      uploadFiles: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuperheroService,
        { provide: PrismaService, useValue: prisma },
        { provide: CloudinaryService, useValue: cloudinary },
      ],
    }).compile();

    service = module.get<SuperheroService>(SuperheroService);
  });

  describe('getAllHeroes', () => {
    it('should return paginated heroes', async () => {
      prisma.hero.findMany.mockResolvedValue([{ id: 1, nickname: 'Hero1', images: [] }]);
      prisma.hero.count.mockResolvedValue(1);

      const result = await service.getAllHeroes({ page: 1, perPage: 5 });

      expect(result.heroes.length).toBe(1);
      expect(result.totalPages).toBe(1);
      expect(prisma.hero.findMany).toHaveBeenCalled();
      expect(prisma.hero.count).toHaveBeenCalled();
    });
  });

  describe('getHeroById', () => {
    it('should return a hero if exists', async () => {
      prisma.hero.findUnique.mockResolvedValue({ id: 1, nickname: 'Hero1', images: [] });
      const hero = await service.getHeroById(1);
      expect(hero).toBeDefined();
      expect(prisma.hero.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
        include: { images: true },
      });
    });
  });

  describe('handleCreateHero', () => {
    const dto: CreateHeroDto = {
      nickname: 'TestHero',
      real_name: 'Real Name',
      origin_description: 'Origin',
      superpowers: 'Powers',
      catch_phrase: 'Catch',
    };

    it('should throw ConflictException if hero exists', async () => {
      prisma.hero.findFirst.mockResolvedValue({ id: 1 });
      await expect(service.handleCreateHero(dto, [])).rejects.toThrow(ConflictException);
    });

    it('should create a hero if nickname is unique', async () => {
      prisma.hero.findFirst.mockResolvedValue(null);
      cloudinary.uploadFiles.mockResolvedValue(['url1']);
      prisma.hero.create.mockResolvedValue({ id: 1, ...dto, images: [{ url: 'url1' }] });

      const hero = await service.handleCreateHero(dto, [{ buffer: Buffer.from(''), originalname: 'img.png' } as any]);

      expect(hero).toHaveProperty('id', 1);
      expect(cloudinary.uploadFiles).toHaveBeenCalled();
      expect(prisma.hero.create).toHaveBeenCalled();
    });
  });

  describe('handleUpdateHero', () => {
  const dto: CreateHeroDto & { existingImages?: string[] } = {
    nickname: 'UpdatedHero',
    real_name: 'Real Updated',
    origin_description: 'Updated Origin',
    superpowers: 'Updated Powers',
    catch_phrase: 'Updated Catch',
    existingImages: ['existing1.png'],
  };

  it('should throw NotFoundException if hero not found', async () => {
    prisma.hero.findUnique.mockResolvedValue(null);
    await expect(service.handleUpdateHero(1, [], dto)).rejects.toThrow(NotFoundException);
  });

  it('should update hero with new and existing images', async () => {
    // Mock hero fetched from DB
    prisma.hero.findUnique.mockResolvedValue({
      id: 1,
      nickname: 'OldHero',
      real_name: 'Old Name',
      origin_description: 'Old Desc',
      superpowers: 'Old Powers',
      catch_phrase: 'Old Catch',
      images: [{ url: 'old.png' }],
    });

    // Mock Cloudinary upload
    cloudinary.uploadFiles.mockResolvedValue(['new.png']);

    // Mock prisma update
    prisma.hero.update.mockResolvedValue({
      id: 1,
      nickname: dto.nickname,
      real_name: dto.real_name,
      origin_description: dto.origin_description,
      superpowers: dto.superpowers,
      catch_phrase: dto.catch_phrase,
      images: [{ url: 'existing1.png' }, { url: 'new.png' }],
    });

    const updatedHero = await service.handleUpdateHero(
      1,
      [{ buffer: Buffer.from(''), originalname: 'new.png' } as any],
      dto
    );

    expect(updatedHero.nickname).toBe(dto.nickname);
    expect(updatedHero.images).toHaveLength(2);
    expect(updatedHero.images.map(i => i.url)).toEqual(['existing1.png', 'new.png']);
    expect(cloudinary.uploadFiles).toHaveBeenCalled();
    expect(prisma.hero.update).toHaveBeenCalled();
  });

  it('should update hero without new files if none provided', async () => {
    prisma.hero.findUnique.mockResolvedValue({
      id: 1,
      nickname: 'OldHero',
      real_name: 'Old Name',
      origin_description: 'Old Desc',
      superpowers: 'Old Powers',
      catch_phrase: 'Old Catch',
      images: [{ url: 'existing1.png' }],
    });

    prisma.hero.update.mockResolvedValue({
      id: 1,
      ...dto,
      images: [{ url: 'existing1.png' }],
    });

    const updatedHero = await service.handleUpdateHero(1, [], dto);

    expect(updatedHero.images).toHaveLength(1);
    expect(updatedHero.images[0].url).toBe('existing1.png');
    expect(cloudinary.uploadFiles).not.toHaveBeenCalled();
  });
});

});
