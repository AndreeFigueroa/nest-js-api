import { INTEGER } from 'sequelize';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Format } from '../../format/entities/format.entity';
import { Product } from '../../products/entities/product.entity';

@Table({
  tableName: 'ProductFormat',
})
export class ProductFormat extends Model {
  @Column({
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  @ForeignKey(() => Format)
  formatId: number;

  @Column
  @ForeignKey(() => Product)
  productId: number;

  @Column
  price: number;
}
