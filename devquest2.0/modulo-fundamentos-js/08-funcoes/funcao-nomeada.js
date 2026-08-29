// funções nomeadas

function saudacao(nome, idade) {
  return `Olá, ${nome}. Você tem ${idade} anos.`;
}

const saudacaoMatheus = saudacao("Matheus", 30);
console.log(saudacaoMatheus);
// saudacao("Marcos", 20);

function ehPar(numero) {
  return numero % 2 === 0;
}

console.log(ehPar(4));
console.log(ehPar(7));
