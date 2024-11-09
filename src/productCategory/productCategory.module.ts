import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCategory } from './entities/ProductCategory.entity';

@Module({
  imports: [SequelizeModule.forFeature([ProductCategory])],
})
export class ProductCategoryModule {}
