import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { dataBaseConfig } from './database/database.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { FormatModule } from './format/format.module';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import { ProductFormatModule } from './product_format/product_format.module';
import { validate } from 'env.validate';
import * as dotenv from 'dotenv';

dotenv.config({ path: process.cwd() + '/.env.development' });

@Module({
  imports: [
    UserModule,
    SequelizeModule.forRoot(dataBaseConfig),
    AuthModule,
    ProductsModule,
    FormatModule,
    CategoryModule,
    ConfigModule.forRoot({
      validate,
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    OrderModule,
    ProductFormatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
