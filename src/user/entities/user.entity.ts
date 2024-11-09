import { INTEGER } from 'sequelize';
import { Column, Table, Model, HasMany } from 'sequelize-typescript';

@Table({
  tableName: 'User',
})
export class User extends Model {
  @Column({
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  role: string;
}
