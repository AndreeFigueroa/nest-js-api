import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'exampleCategory' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'exampleDescription' })
  @IsString()
  description: string;

  @ApiProperty({ example: 'exampleImage' })
  @IsString()
  image: string;
}
