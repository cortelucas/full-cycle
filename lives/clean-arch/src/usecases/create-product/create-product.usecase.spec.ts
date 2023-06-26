import { describe, it, expect, vi } from 'vitest'
import { CreateProductUseCase } from './create-product.usecase'
describe('create product use case unit test', () => {
  it('should create a product', async () => {
    const input = {
      id: 'uuid',
      name: 'iPhone',
      cost: 100
    }
    const output = {
      id: 'uuid',
      name: 'iPhone',
      cost: 100,
      salesPrice: 300
    }
    const productGateway = () => {
      return {
        create: vi.fn()
      }
    }
    const createProductUseCase = new CreateProductUseCase(productGateway())
    const result = await createProductUseCase.execute(input)
    expect(result).toEqual(output)
  })
})
