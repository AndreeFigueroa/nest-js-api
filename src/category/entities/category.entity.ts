import { Table, Column, HasMany, Model } from 'sequelize-typescript';
import { INTEGER } from 'sequelize';
import { Product } from 'src/products/entities/product.entity';
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

  @HasMany(() => Product)
  products: Product[];
}
