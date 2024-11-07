import { Injectable } from '@nestjs/common';
import { CreateFormatDto } from './dto/create-format.dto';
import { UpdateFormatDto } from './dto/update-format.dto';
import { Format } from './entities/format.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class FormatService {
  constructor(
    @InjectModel(Format)
    private formatRepository: typeof Format,
  ) {}
  create(createFormatDto: CreateFormatDto) {
    return this.formatRepository.create(createFormatDto as any);
  }

  findAll() {
    return this.formatRepository.findAll();
  }

  findOne(id: number) {
    return this.formatRepository.findByPk(id);
  }

  update(id: number, updateFormatDto: UpdateFormatDto) {
    return this.formatRepository.update(updateFormatDto as any, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.formatRepository.destroy({
      where: { id },
    });
  }

  findProductFormats(id: number) {
    return this.formatRepository.findAll({
      where: { productId: id },
    });
  }
}
