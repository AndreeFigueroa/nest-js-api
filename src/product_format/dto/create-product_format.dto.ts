import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProductFormatDto {
  @ApiProperty({ example: '1000' })
  @IsString()
  formatId: number;

  @ApiProperty({ example: '1000' })
  @IsNumber()
  productId: number;

  @ApiProperty({ example: '1000' })
  @IsNumber()
  price: number;
}
