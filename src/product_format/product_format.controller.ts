import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductFormatService } from './product_format.service';
import { CreateProductFormatDto } from './dto/create-product_format.dto';
import { UpdateProductFormatDto } from './dto/update-product_format.dto';

@Controller('product-format')
export class ProductFormatController {
  constructor(private readonly productFormatService: ProductFormatService) {}

  @Post()
  create(@Body() createProductFormatDto: CreateProductFormatDto) {
    return this.productFormatService.create(createProductFormatDto);
  }

  @Get()
  findAll() {
    return this.productFormatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productFormatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductFormatDto: UpdateProductFormatDto) {
    return this.productFormatService.update(+id, updateProductFormatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productFormatService.remove(+id);
  }
}
