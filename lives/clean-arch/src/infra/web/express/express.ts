import express, { Express } from 'express'
import { Sequelize } from 'sequelize-typescript'
import { ProductModel } from '../../database/product.model'
import { productRouter } from '../routes/product.routes'

export const app: Express = express()
app.use(express.json())
app.use('/products', productRouter)

export let sequelize: Sequelize

async function setupDB () {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory',
    logging: false,
    sync: { force: true }
  })
  sequelize.addModels([ProductModel])

  await sequelize.sync()
}

setupDB()
