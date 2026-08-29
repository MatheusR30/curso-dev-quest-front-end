// map - cria um novo array com base em um array existente
// um metodo que vai manipular os dados de um array e criar
// um novo array com base nesses dados

const numbers = [1, 2, 3, 4, 5];

//o MAP nao altera a array original, entao modificamos
// e a colocamos em uma nova variavel

// versao mais verbosa, com o index
// const doubledNumbers = numbers.map((number, index) => {
//   console.log(index);
//   return number * 2;
// });

// versao shortand clean
const doubledNumbers = numbers.map((number) => number * 2);

console.log(numbers);
console.log(doubledNumbers);
