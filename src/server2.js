//curl "localhost:3000/products?name=laptop"

import { createServer } from 'http'

const PORT = 4000
async function handler(request, response) {

  return response.end(`hey!`)
}

createServer(handler)
.listen(PORT)
.on('listening', () => {
  console.log(`cart API is running at ${PORT}`)
})