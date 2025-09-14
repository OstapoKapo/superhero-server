import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateHeroDto {
  @ApiProperty({ example: 'Superman', description: 'The nickname of the superhero' })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  nickname: string;

  @ApiProperty({ example: 'Clark Kent', description: 'The real name of the superhero' })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  real_name: string;

  @ApiProperty({ example: 'Born on the planet Krypton...', description: 'The origin description of the superhero' })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  origin_description: string;

  @ApiProperty({ example: 'Super strength, flight, x-ray vision', description: 'The superpowers of the superhero' })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  superpowers: string;

  @ApiProperty({ example: 'Up, up and away!', description: 'The catch phrase of the superhero' })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  catch_phrase: string;

  @ApiProperty({ example: ['image1.jpg', 'image2.jpg'], description: 'The images of the superhero' })
  existingImages?: string[];
}
