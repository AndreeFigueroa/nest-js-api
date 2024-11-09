import { INTEGER } from 'sequelize';
import { Column, Table, Model } from 'sequelize-typescript';

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
}
