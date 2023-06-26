import Product from '../../entities/products'
import { ProductGateway } from '../../adapters/gateways/product.gateway'
import { ProductModel } from './product.model'

export class ProductRepository implements ProductGateway {
  async create ({ id, name, cost, salesPrice }: Product): Promise<void> {
    ProductModel.create({ id, name, cost, salesPrice })
  }
}
