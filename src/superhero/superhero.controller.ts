import { Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SuperheroService } from './superhero.service';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
@ApiTags('heroes')
@Controller('heroes')
export class SuperheroController {
    constructor(
        private readonly superheroService: SuperheroService,
    ) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiQuery({ name: 'page', required: true, type: Number, description: 'Номер сторінки для пагінації' })
    @ApiQuery({ name: 'perPage', required: true, type: Number, description: 'Кількість елементів на сторінку' })
    @ApiOkResponse({
        description: 'Список героїв з пагінацією',
        schema: {
            example: {
                heroes: [
                    { id: 1, nickname: 'Superman', real_name: 'Clark Kent', origin_description: 'From planet Krypton', superpowers: 'Super strength, flight, x-ray vision', catch_phrase: 'Up, up and away!', images: [] },
                    { id: 2, nickname: 'Batman', real_name: 'Bruce Wayne', origin_description: 'Gotham City', superpowers: 'Intellect, martial arts, stealth', catch_phrase: 'I am vengeance, I am the night!', images: [] },
                ],
            totalItems: 42,
            currentPage: 1,
            totalPages: 9,
            },
        },
    })
    getAllHeroes(
        @Query('page') page: number,
        @Query('perPage', ParseIntPipe) perPage: number,
    ){
        return this.superheroService.getAllHeroes({ page, perPage });
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        description: 'Детальна інформація про героя',
        schema: {
            example: {
                id: 1,
                nickname: 'Superman',
                real_name: 'Clark Kent',
                origin_description: 'From planet Krypton',
                superpowers: 'Super strength, flight, x-ray vision',
                catch_phrase: 'Up, up and away!',
                images: [],
            },
        },
    })
    getHeroById(@Param('id', ParseIntPipe) id: number) {
        return this.superheroService.getHeroById(id);
    }

    @Post('/')
    @HttpCode(HttpStatus.CREATED)
    @ApiOkResponse({
        description: 'Створення нового героя',
        schema: {
            example: {
                id: 43,
                nickname: 'NewHero',
                real_name: 'New Real Name',
                origin_description: 'New Origin Description',
                superpowers: 'New Superpowers',
                catch_phrase: 'New Catch Phrase',
                images: [],
            },
        },
    })
    createHero() {
        return this.superheroService.createHero();
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOkResponse({
        description: 'Видалення героя за ID',
        schema: {
            example: null,
        },
    })
    deleteHero(@Param('id', ParseIntPipe) id: number) {
        return this.superheroService.deleteHero(id);
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        description: 'Оновлення інформації про героя',
        schema: {
            example: {
                id: 1,
                nickname: 'UpdatedHero',
                real_name: 'Updated Real Name',
                origin_description: 'Updated Origin Description',
                superpowers: 'Updated Superpowers',
                catch_phrase: 'Updated Catch Phrase',
                images: [],
            },
        },
    })
    updateHero(@Param('id', ParseIntPipe) id: number) {
        return this.superheroService.updateHero(id);
    }  
}
