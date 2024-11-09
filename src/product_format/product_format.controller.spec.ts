import { Test, TestingModule } from '@nestjs/testing';
import { ProductFormatController } from './product_format.controller';
import { ProductFormatService } from './product_format.service';

describe('ProductFormatController', () => {
  let controller: ProductFormatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductFormatController],
      providers: [ProductFormatService],
    }).compile();

    controller = module.get<ProductFormatController>(ProductFormatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
