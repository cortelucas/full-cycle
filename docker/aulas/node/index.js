const express = require('express')
const api = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Lucas')`

connection.query(sql)
connection.end()

api.get('/', (request, response) => {
  response.send('<h1>Full Cycle</h1>')
})

api.listen(port, () => {
  console.log(`App listening on ${port}`)
})
