import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Column, ForeignKey, Model } from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';

export class CreateOrderDto extends Model {
  @ApiProperty({ example: '1' })
  @IsNumber()
  id: number;

  @ApiProperty({ example: '1' })
  @IsNumber()
  NumOrder: number;

  @ApiProperty({ example: '1' })
  @ForeignKey(() => User)
  @IsNumber()
  userId: number;

  @ApiProperty({ example: '1' })
  @IsNumber()
  @Column
  quantity: number;

  @ApiProperty({ example: '1' })
  @IsNumber()
  @Column
  productFormatId: number;
}
