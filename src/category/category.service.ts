import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryRepository: typeof Category,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.create(createCategoryDto as any);
  }

  findAll() {
    return this.categoryRepository.findAll();
  }

  findOne(id: number) {
    return this.categoryRepository.findByPk(id);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update(updateCategoryDto as any, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.categoryRepository.destroy({
      where: { id },
    });
  }
  getProducts(id: number) {
    return this.categoryRepository.findByPk(id, { include: ['products'] });
  }
}
