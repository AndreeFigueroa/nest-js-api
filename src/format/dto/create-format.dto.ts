import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateFormatDto {
  @ApiProperty({ example: '1000' })
  @IsString()
  price: string;

  @ApiProperty({ example: '100gr' })
  @IsString()
  format: string;

  @ApiProperty({ example: '1' })
  @IsNumber()
  productId: number;
}
