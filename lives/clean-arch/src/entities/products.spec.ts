import { describe, it, expect } from 'vitest'
import Product from './products'

describe('Products unit test', () => {
  it('should have an ID', () => {
    const product = new Product('Test Product')
    expect(product.id).toBeDefined()
  })
  it('should have a name', () => {
    const product = new Product('uuid', 'Product 1')
    expect(product.name).toBe('Product 1')
  })

  it('should throw an error if cost is negative', () => {
    const product = new Product('uuid')
    expect(() => product.cost = -1).toThrowError('Cost cannot be negative')
  })

  it('should set the cost a product', () => {
    const product = new Product('uuid', 'iPhone')
    product.cost = 100
    expect(product.cost).toBe(100)
  })

  it('should set the salesPrice by 3 times the cost of the product', () => {
    const product = new Product('uuid', 'iPhone')
    product.cost = 100
    expect(product.salesPrice).toBe(300)
  })
})
