import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'exampleName' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'pass' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'email@gmail.com' })
  @IsString()
  email: string;

  @ApiProperty({ example: 'admin/client' })
  @IsString()
  role: string;
}
