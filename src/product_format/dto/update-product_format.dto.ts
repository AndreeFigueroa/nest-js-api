import { PartialType } from '@nestjs/swagger';
import { CreateProductFormatDto } from './create-product_format.dto';

export class UpdateProductFormatDto extends PartialType(CreateProductFormatDto) {}
