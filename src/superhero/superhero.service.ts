import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CreateHeroDto } from 'src/common/dto/create-change.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SuperheroService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly cloudinaryService: CloudinaryService,  
    ) {}

    async getAllHeroes({ page, perPage }: { page: number; perPage: number }) {
        const skip = (page - 1) * perPage;

        const heroes = await this.prisma.hero.findMany({
            skip,
            take: perPage,
            orderBy: { id: 'asc' },
            include: { images: true },
        })

        const totalItems = await this.prisma.hero.count();

        return {
            heroes,
            totalItems,
            totalPages: Math.ceil(totalItems / perPage),
            currentPage: page,
            perPage,
        }
    }

    async getHeroById(id: number) {
        return this.prisma.hero.findUnique({
            where: { id },
            include: { images: true },
        });
    }

    private async createHero(dto: CreateHeroDto, images: string[]) {
        return this.prisma.hero.create({
            data: {
                nickname: dto.nickname,
                real_name: dto.real_name,
                origin_description: dto.origin_description,
                superpowers: dto.superpowers,
                catch_phrase: dto.catch_phrase,
                images: {
                    create: images.map((url) => ({ url })),
                }
            },
        });
    }

    async handleCreateHero(dto: CreateHeroDto, files: Express.Multer.File[]) {
        if (await this.heroExists(dto.nickname)) throw new ConflictException('Hero with this NickName already exists');
        const urls = await this.cloudinaryService.uploadFiles(files);
        return await this.createHero(dto, urls);
    }

    private async heroExists(nickname: string): Promise<boolean> {
        const hero = await this.prisma.hero.findFirst({
            where: { nickname: { equals: nickname.toLowerCase(), mode: 'insensitive' } },
        });
        return !!hero;
    }

    async handleUpdateHero(id: number, files: Express.Multer.File[], dto: CreateHeroDto) {
        const hero = await this.getHeroById(id);

        if (!hero) {
            throw new NotFoundException(`Hero with id ${id} not found`);
        }

        const { existing, finalImages, uploadedUrls } = await this.checkHeroImages(files, dto);

        hero.nickname = dto.nickname;
        hero.real_name = dto.real_name;
        hero.origin_description = dto.origin_description;
        hero.superpowers = dto.superpowers;
        hero.catch_phrase = dto.catch_phrase;


        return await this.updateHero(uploadedUrls, finalImages, id, hero);

    }

    private async checkHeroImages(files: Express.Multer.File[], dto: CreateHeroDto) {
        let uploadedUrls: string[] = [];
        if (files && files.length > 0) {
            uploadedUrls = await this.cloudinaryService.uploadFiles(files);
        }

       const existing = Array.isArray(dto.existingImages) ? dto.existingImages : dto.existingImages ? [dto.existingImages] : [];

        const finalImages = [...existing, ...uploadedUrls];

        return {existing, finalImages, uploadedUrls}
    }

    private async updateHero(uploadedUrls: string[], finalImages: string[], id: number, hero: CreateHeroDto) {
         return await this.prisma.hero.update({
            where: { id },
            data: {
                nickname: hero.nickname,
                real_name: hero.real_name,
                origin_description: hero.origin_description,
                superpowers: hero.superpowers,
                catch_phrase: hero.catch_phrase,
                images: {
                    deleteMany: {
                         url: { notIn: finalImages },
                    },
                    create: uploadedUrls.map((url) => ({ url })),
                },
            },
            include: {
                images: true,
            },
        });

    }

    async deleteHero(id: number) {
        if(!await this.getHeroById(id)) throw new NotFoundException('Hero with this ID does not exist');
        await this.prisma.hero.delete({
            where: { id },
        });
        return id;
    }
}
