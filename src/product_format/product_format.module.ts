import { Module } from '@nestjs/common';
import { ProductFormatService } from './product_format.service';
import { ProductFormatController } from './product_format.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductFormat } from './entities/product_format.entity';

@Module({
  imports: [SequelizeModule.forFeature([ProductFormat])],
  controllers: [ProductFormatController],
  providers: [ProductFormatService],
  exports: [ProductFormatService],
})
export class ProductFormatModule {}
