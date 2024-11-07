import { INTEGER } from 'sequelize';
import { Column, Table, Model, HasMany } from 'sequelize-typescript';
import { Category } from 'src/category/entities/category.entity';
import { Format } from 'src/format/entities/format.entity';

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

  @HasMany(() => Format)
  formats: Format[];

  @HasMany(() => Category)
  categories: Category[];
}
