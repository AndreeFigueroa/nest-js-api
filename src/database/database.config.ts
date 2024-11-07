import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Format } from 'src/format/entities/format.entity';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: '.db/data.sqlite3',
  models: [Format, Product, User],
  autoLoadModels: true,
  synchronize: true,
};
