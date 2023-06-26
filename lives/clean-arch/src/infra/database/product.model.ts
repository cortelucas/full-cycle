import { Model, PrimaryKey, Column, Table, DataType } from 'sequelize-typescript'

@Table({ tableName: 'products', timestamps: false })
export class ProductModel extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
    id: string

  @Column(DataType.STRING)
    name: string

  @Column(DataType.NUMBER)
    cost: number

  @Column(DataType.NUMBER)
    salesPrice: number
}
