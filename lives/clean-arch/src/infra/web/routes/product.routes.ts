import { Router, Request, Response } from 'express'
import { CreateProductUseCase } from '../../../usecases/create-product/create-product.usecase'
import { ProductRepository } from '../../database/product.repository'

export const productRouter = Router()

productRouter.post('/', async (request: Request, response: Response) => {
  const createProductUseCase = new CreateProductUseCase(new ProductRepository())
  try {
    const productDTO = {
      id: request.body.id,
      name: request.body.name,
      cost: request.body.cost
    }
    const output = await createProductUseCase.execute(productDTO)
    response.status(200).send(output)
  } catch (error) {
    response.status(500).send(error)
  }
})

productRouter.get('/', async (request: Request, response: Response) => {
  response.status(200).send('Ola')
})
