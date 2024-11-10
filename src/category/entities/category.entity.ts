import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { INTEGER } from 'sequelize';
import { Product } from '../../products/entities/product.entity';
import { ProductCategory } from '../../productCategory/entities/productCategory.entity';
@Table({
  tableName: 'Category',
})
export class Category extends Model {
  @Column({
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  image: string;

  @BelongsToMany(() => Product, () => ProductCategory)
  products: Product[];
}
