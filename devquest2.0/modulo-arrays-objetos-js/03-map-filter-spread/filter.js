// FILTER - vai filtrar os elementos de uma array, com base
// em uma condicao

const products = [
  { id: 1, name: "Notebook", price: 3000 },
  { id: 2, name: "Mouse", price: 20 },
  { id: 3, name: "keyboard", price: 50 },
  { id: 4, name: "Monitor", price: 700 },
  { id: 5, name: "Chain", price: 150 },
];

const priceGreaterThanOneHundred = products.filter(
  (product) => product.price > 100,
);

console.log(priceGreaterThanOneHundred);
