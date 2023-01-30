const products = [
    { name: "Product 1", price: 42 },
    { name: "Product 2", price: 20 },
    { name: "Product 3", price: 1337 },
];

const totalValue = products
    .filter(product => product.price > 30)
    .reduce( (sum, product) => {
    return sum + product.price
    }, 0 )
console.log("totalValue:", totalValue)

const productNames = products.map(product => `<p>${product.name}</p>`)
console.log("productNames:", productNames)