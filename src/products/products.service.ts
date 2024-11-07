import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productRepository: typeof Product,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto as any);
  }

  findAll() {
    return this.productRepository.findAll();
  }

  findOne(id: number) {
    return this.productRepository.findByPk(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(updateProductDto as any, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.productRepository.destroy({
      where: { id },
    });
  }
}
