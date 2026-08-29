// tipos primitivos

// string - texto
const nome = "Matheus";

// number - números
const idade = 30;
const pi = 3.14;
// em JavaScript, não tem essa diferenciação, todos os números são do tipo number

// boolean
const possuiFaculdade = true;

if (possuiFaculdade) {
  console.log("Possui faculdade");
} else {
  console.log("Não possui faculdade");
}

// undefined - não foi inicializado com algum valor
let cor;
console.log(cor); // undefined

const pessoa = { nome: "Matheus", idade: 30 };
console.log("O nome da pessoa é:", pessoa.nome);
console.log("A idade da pessoa é:", pessoa.idade);
console.log("A idade da pessoa é:", pessoa.sexo);

// null - nãp tem valor definido
let avaliacao = null;
avaliacao = 4;
