import { Injectable } from '@nestjs/common';
import { connect } from 'http2';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SuperheroService {
    constructor(private readonly prisma: PrismaService) {}
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

    async createHero() {
        return this.prisma.hero.create({
            data: {
                nickname: 'NewHero',
                real_name: 'New Real Name',
                origin_description: 'New Origin Description',
                superpowers: 'New Superpowers',
                catch_phrase: 'New Catch Phrase',
            },
            include: { images: true },
        });
    }

    async updateHero(id: number) {
        return this.prisma.hero.update({
            where: { id },
            data: {
                nickname: 'UpdatedHero',
                real_name: 'Updated Real Name',
                origin_description: 'Updated Origin Description',
                superpowers: 'Updated Superpowers',
                catch_phrase: 'Updated Catch Phrase',
            },
            include: { images: true },
        });
    }

    async deleteHero(id: number) {
        return this.prisma.hero.delete({
            where: { id },
        });
    }
}
