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

@Module({
  imports: [
    UserModule,
    SequelizeModule.forRoot(dataBaseConfig),
    AuthModule,
    ProductsModule,
    FormatModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
