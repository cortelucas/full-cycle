import Product from '../../entities/products'

export interface ProductGateway {
  create: (product: Product) => Promise<void>
}
