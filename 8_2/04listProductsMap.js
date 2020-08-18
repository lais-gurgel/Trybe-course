const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts = products.map((product, index) => `{ ${products[index]}: ${prices[index]}}`);

// const updateProducts = (listProducts, listPrices) => {
//   return listProducts.map((product, index) => (
//     { [product]: listPrices[index] }
//   ));
// };
// const listProducts = updateProducts(products, prices);

console.log(listProducts)

// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]

