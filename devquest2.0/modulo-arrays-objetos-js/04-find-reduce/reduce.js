// REDUCE - é utilizado para reduzir um array a um único valor, aplicando uma função
// a cada elemento do array, acumulando o resultado. Ele recebe dois argumentos: uma
// função de callback e um valor inicial para o acumulador.

// reduce((acumulador, item, indece, array) => {},0)

const numeros = [1, 2, 3, 4, 5];

// Para usar o Reduce, criamos uma nova variavel, e trabalhar em cima
// da anterior para criar um resultado somando ou multiplicando ou
// concatenando, etc. O resultado do reduce é o valor final da operação,
// que pode ser um número, uma string, um objeto, etc.
const resultadoReduce = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log(resultadoReduce);
