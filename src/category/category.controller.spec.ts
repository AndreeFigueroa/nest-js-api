import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

describe('CategoryController', () => {
  const mockCategoryService = {
    create: jest.fn().mockResolvedValue({
      name: expect.any(String),
      description: expect.any(String),
      image: expect.any(String),
    }),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    getProducts: jest.fn(),
  };

  let controller: CategoryController;
  let categoryService: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        {
          provide: CategoryService,
          useValue: mockCategoryService,
        },
      ],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
    categoryService = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(categoryService).toBeDefined();
  });

  it('should create a category', async () => {
    const result = {
      name: expect.any(String),
      description: expect.any(String),
      image: expect.any(String),
    };
    expect(await controller.create(result)).toStrictEqual(result);
  });
});
