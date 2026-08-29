// && (AND) - true se ambos os operadores forem verdadeiros

// const numero1 = 2;
// const numero2 = 2;

// console.log(numero1 === numero2 && numero1 <= numero2);

// || (OR) - true se um dos operadores for verdadeiro
// const numero1 = 2;
// const numero2 = 3;

// console.log(numero1 === numero2 || numero1 <= numero2);

// if (numero1 === numero2 || numero1 <= numero2) {
//     console.log("Verdadeiro");
// } else {
//     console.log("Falso");
// }

// ! (NOT) - true se o operador for false, e vice-versa
const hasError = false;
console.log(hasError);

if (hasError) {
  console.log("Ops, ocorreu um erro!");
}

console.log("hasError");

if (!hasError) {
  console.log("não, há erros!");
}
