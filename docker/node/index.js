const express = require('express')
const api = express()
const port = 3000

api.get('/', (request, response) => {
  response.send('<h1>Full Cycle</h1>')
})

api.listen(port, () => {
  console.log(`App listening on ${port}`)
})
