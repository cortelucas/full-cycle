import { describe, beforeEach, afterAll, it, expect } from 'vitest'
import { app, sequelize } from '../express/express'
import request from 'supertest'

describe('end two end for product', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true })
  })

  afterAll(async () => {
    await sequelize.close()
  })

  it('should create a product', async () => {
    const product = {
      id: '1',
      name: 'Product',
      cost: 100
    }

    const response = await request(app).post('/products').send(product)
    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      id: '1',
      name: 'Product',
      cost: 100,
      salesPrice: 300
    })
  })
})
