import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table
export default class Article extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: bigint;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  title: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description: string;

  @AllowNull(false)
  @Column(DataType.STRING(2048))
  image: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  location: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  price: number;

  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  isAdjustable: boolean;
}
