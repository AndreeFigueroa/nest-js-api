import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFormatDto {
  @ApiProperty({ example: '1000' })
  @IsString()
  price: string;

  @ApiProperty({ example: '100gr' })
  @IsString()
  format: string;
}
