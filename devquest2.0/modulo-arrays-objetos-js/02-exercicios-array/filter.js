/*
📝 Instruções do Exercício
Crie um array chamado `produtos`, onde cada item é um objeto com as 
propriedades `nome` e `preco`. Adicione pelo menos 4 produtos diferentes. 
Depois, use o método `filter()` para criar um novo array chamado `produtosCaros`, 
contendo apenas os produtos com preço maior que 50. Por fim, exiba os dois arrays (`produtos` e
*/

const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Smartphone", preco: 1500 },
  { nome: "Fone de Ouvido", preco: 20 },
  { nome: "Monitor", preco: 800 },
];

const produtosCaros = produtos.filter((produto) => produto.preco > 50);
console.log(produtos);
console.log(produtosCaros);
