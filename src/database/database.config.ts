import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Category } from 'src/category/entities/category.entity';
import { Format } from 'src/format/entities/format.entity';
import { Order } from 'src/order/entities/order.entity';
import { ProductFormat } from 'src/product_format/entities/product_format.entity';
import { ProductCategory } from 'src/productCategory/entities/ProductCategory.entity';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: '.db/data.sqlite3',
  models: [
    Format,
    Product,
    User,
    Category,
    ProductCategory,
    Order,
    ProductFormat,
  ],
  autoLoadModels: true,
  synchronize: true,
};
