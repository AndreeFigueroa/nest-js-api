import { Test, TestingModule } from '@nestjs/testing';
import { ProductFormatService } from './product_format.service';

describe('ProductFormatService', () => {
  let service: ProductFormatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductFormatService],
    }).compile();

    service = module.get<ProductFormatService>(ProductFormatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
