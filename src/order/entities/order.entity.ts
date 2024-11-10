import { INTEGER } from 'sequelize';
import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { ProductFormat } from 'src/product_format/entities/product_format.entity';
import { User } from 'src/user/entities/user.entity';

@Table({
  tableName: 'Order',
})
export class Order extends Model {
  @Column({
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  NumOrder: number;

  @Column
  @ForeignKey(() => User)
  userId: number;

  @Column
  @ForeignKey(() => ProductFormat)
  productFormatId: number;
}
