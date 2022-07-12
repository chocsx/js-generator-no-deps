const myDB = async () => Array.from({
  length: 1000
}, (v, index) => `${index}-laptop`)

const PRODUCTS_API = `http://localhost:3000/products`
const CART_API = `http://localhost:4000/cart`

async function processDBData() {
  const products = await myDB()
  const responses = []

  for (const product of products) {
    const productInfo = await (await fetch(`${PRODUCTS_API}?name=${product}`)).text()
    const cartAPIInfo = await (await fetch(CART_API, {
      method: 'POST',
      body: productInfo
    })).text()

    responses.push(cartAPIInfo)
  }

  return responses
}

console.table(await processDBData());