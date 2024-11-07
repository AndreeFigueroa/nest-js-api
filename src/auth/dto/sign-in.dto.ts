import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({ example: 'pass' })
  @IsString()
  readonly password: string;

  @ApiProperty({ example: 'email@gmail.com' })
  @IsString()
  readonly email: string;
}
