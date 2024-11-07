import { INTEGER } from 'sequelize';
import {
  Column,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Product } from 'src/products/entities/product.entity';

@Table({
  tableName: 'Format',
})
export class Format extends Model {
  @Column({
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  format: string;

  @Column
  price: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @BelongsTo(() => Product, {
    foreignKey: 'productId',
    as: 'product',
  })
  product: Product;
}
