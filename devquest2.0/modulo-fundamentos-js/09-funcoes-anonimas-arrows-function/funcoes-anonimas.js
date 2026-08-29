// Função anonima, que nao recebe nome

// const saudacao = function (nome) {
//   console.log(`Olá, tudo bem, ${nome}`);
// return `Olá, tudo bem, ${nome}`;
// };

// saudacao("Matheus");

// Mesmo que a Saudacao seja uma variavel, ela tem uma funcao anonima atribuida, e se chama como uma funcao
// saudacao();

// Funcao nomeada - sofre hoisting, ou seja ela pode ser chamada antes da sua declaracao
// function saudacao() {
//   console.log("Olá, tudo bem?");
// }

// Funcoes de seta - arrow functions
const saudacao = (nome) => {
  return `Olá, tudo bem, ${nome}?`;
};

console.log(saudacao("Matheus"));
// const saudacaoMatheus = saudacao("Matheus");
// console.log(saudacaoMatheus);
