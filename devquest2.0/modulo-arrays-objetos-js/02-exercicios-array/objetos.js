/*
📝 Instruções do Exercício
Crie um objeto chamado `pessoa` com as propriedades: `nome` (string),
 `idade` (número) e `cidade` (string). Depois, use `console.log()` 
 para exibir uma frase no formato: 'Meu nome é NOME, tenho IDADE anos e 
 moro em CIDADE'. s..
*/

const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
};

console.log(
  `Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e moro em ${pessoa.cidade}`,
);
