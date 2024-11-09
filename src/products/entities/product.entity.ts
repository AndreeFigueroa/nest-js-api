import { INTEGER } from 'sequelize';
import { Column, Table, Model, BelongsToMany } from 'sequelize-typescript';
import { Category } from 'src/category/entities/category.entity';
import { ProductCategory } from 'src/productCategory/entities/productCategory.entity';

@Table({
  tableName: 'Product',
})
export class Product extends Model {
  @Column({
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  image: string;

  @BelongsToMany(() => Category, () => ProductCategory)
  categories: Category[];
}
