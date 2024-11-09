import { Injectable } from '@nestjs/common';
import { CreateProductFormatDto } from './dto/create-product_format.dto';
import { UpdateProductFormatDto } from './dto/update-product_format.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ProductFormat } from './entities/product_format.entity';

@Injectable()
export class ProductFormatService {
  constructor(
    @InjectModel(ProductFormat)
    private productFormatRepository: typeof ProductFormat,
  ) {}
  create(createProductFormat: CreateProductFormatDto) {
    return this.productFormatRepository.create(createProductFormat as any);
  }

  findAll() {
    return this.productFormatRepository.findAll();
  }

  findOne(id: number) {
    return this.productFormatRepository.findByPk(id);
  }

  update(id: number, updateProductFormatDto: UpdateProductFormatDto) {
    return this.productFormatRepository.update(updateProductFormatDto as any, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.productFormatRepository.destroy({
      where: { id },
    });
  }
}
