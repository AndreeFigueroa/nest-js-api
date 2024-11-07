import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'exampleName' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'exampleImage' })
  @IsString()
  image: string;
}
