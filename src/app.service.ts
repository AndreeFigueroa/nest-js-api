import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Product } from './products/entities/product.entity';
import { Category } from './category/entities/category.entity';
import { Format } from './format/entities/format.entity';
import { User } from './user/entities/user.entity';
import { ProductCategory } from './productCategory/entities/productCategory.entity';
import { ConfigService } from '@nestjs/config';
import { ProductFormat } from './product_format/entities/product_format.entity';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async fillDataBase(): Promise<string> {
    const sequelize = new Sequelize({
      dialect: this.configService.get('database.dialect'),
      storage: this.configService.get('database.storage'),
      models: [Product, Category, Format, User, ProductCategory],
    });

    const fillDatabase = async () => {
      try {
        await sequelize.sync({ force: true });
        //User
        await User.bulkCreate([
          {
            name: 'Andree',
            email: 'asfo.2009@gmail.com',
            password: '123',
            role: 'admin',
          },
        ]);
        //Categories
        const categories = await Category.bulkCreate([
          { name: 'Frutos Secos' },
          { name: 'Semillas' },
        ]);
        //Products
        const products = await Product.bulkCreate([
          {
            name: 'Almendras',
            image:
              'https://img.freepik.com/foto-gratis/fondo-almendras-organicas_158595-6289.jpg',
          },
        ]);
        //ProductCategory
        await ProductCategory.bulkCreate([
          { productId: products[0].id, categoryId: categories[0].id },
        ]);

        //Formats
        const formats = await Format.bulkCreate([
          { format: '100g' },
          { format: '200g' },
          { format: '300g' },
          { format: '400g' },
          { format: '500g' },
          { format: '600g' },
          { format: '700g' },
          { format: '800g' },
          { format: '900g' },
          { format: '1kg' },
          { format: '2kg' },
        ]);
        //ProductFormat
        await ProductFormat.bulkCreate([
          { productId: products[0].id, formatId: formats[0].id, price: 1000 },
          { productId: products[0].id, formatId: formats[1].id, price: 2000 },
          { productId: products[0].id, formatId: formats[2].id, price: 3000 },
          { productId: products[0].id, formatId: formats[3].id, price: 4000 },
          { productId: products[0].id, formatId: formats[4].id, price: 5000 },
          { productId: products[0].id, formatId: formats[5].id, price: 6000 },
          { productId: products[0].id, formatId: formats[6].id, price: 7000 },
          { productId: products[0].id, formatId: formats[7].id, price: 8000 },
          { productId: products[0].id, formatId: formats[8].id, price: 9000 },
          { productId: products[0].id, formatId: formats[9].id, price: 10000 },
          { productId: products[0].id, formatId: formats[10].id, price: 20000 },
        ]);

        //Orders

        console.log('Database filled with sample data!');
      } catch (error) {
        console.error('Error filling the database:', error);
      }
    };
    try {
      await fillDatabase();
      return 'Base de datos llenada';
    } catch (error) {
      return 'Error llenando la base de datos: ' + error;
    }
  }
}
