import { Module } from '@nestjs/common';
import { FormatService } from './format.service';
import { FormatController } from './format.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Format } from './entities/format.entity';

@Module({
  imports: [SequelizeModule.forFeature([Format])],
  controllers: [FormatController],
  providers: [FormatService],
})
export class FormatModule {}
