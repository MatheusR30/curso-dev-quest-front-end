/*
📝 Instruções do Exercício
Crie um array chamado `usuarios`, onde cada item é um objeto com as 
propriedades `id` e `nome`. Adicione pelo menos 4 usuários diferentes. 
Depois, use o método `find()` para procurar o usuário que tenha `id` 
igual a 3. Armazene o resultado em uma variável chamada `usuarioEncontrado` 
e exiba no console o objeto retornado. 
*/

const usuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bob" },
  { id: 3, nome: "Charlie" },
  { id: 4, nome: "Diana" },
];

const usuarioEncontrado = usuarios.find((usuario) => usuario.id === 3);
console.log(usuarioEncontrado);
