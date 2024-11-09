import { INTEGER } from 'sequelize';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Category } from '../../category/entities/category.entity';
import { Product } from '../../products/entities/product.entity';

@Table({
  tableName: 'ProductCategory',
})
export class ProductCategory extends Model {
  @Column({
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
}
