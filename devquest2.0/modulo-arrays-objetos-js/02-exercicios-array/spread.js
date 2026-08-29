/*
📝 Instruções do Exercício
Crie um array chamado `numeros1` com os valores [1, 2, 3]. 
Depois, crie outro array chamado `numeros2` com os valores [4, 5, 6]. 
Use o spread operator para criar um novo array chamado `todosNumeros` 
que junte os dois arrays. Em seguida, crie um objeto chamado `pessoa` 
com as propriedades `nome` e `idade`. Use o spread operator para criar 
um novo objeto chamado `pessoaAtualizada`, copiando todas as propriedades 
do objeto original e adicionando a propriedade `cidade`. Exiba todos 
os resultados no console.  
*/

const numeros1 = [1, 2, 3];

const numeros2 = [4, 5, 6];

const todosNumeros = [...numeros1, ...numeros2];

console.log(todosNumeros);

// Objeto original
const pessoa = {
  nome: "Matheus",
  idade: 30,
};

// Usando spread para adicionar uma nova propriedade
const pessoaAtualizada = {
  ...pessoa,
  cidade: "São Paulo",
};

console.log(pessoaAtualizada);
