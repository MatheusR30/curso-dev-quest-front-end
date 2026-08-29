/*
📝 Instruções do Exercício
Crie um array chamado `carrinho`, onde cada item é um objeto
com as propriedades `produto` e `preco`. Adicione pelo menos 3 itens
diferentes no array. Depois, use o método `reduce()` para calcular o 
valor total de todos os preços e armazene o resultado em uma variável 
chamada `total`. Exiba o valor total no console. 
*/

// Aqui, você cria um array chamado carrinho.
// Cada elemento do array é um objeto que contém duas propriedades:
// produto: uma string que representa o nome do produto.
// preco: um número que representa o preço do produto.
const carrinho = [
  { produto: "Camisa", preco: 50 },
  { produto: "Calça", preco: 100 },
  { produto: "Tênis", preco: 200 },
];

// O método reduce é usado para reduzir o array a um único valor (neste caso, a soma dos preços). Vamos detalhar:

// O reduce recebe uma função de callback que será executada para cada item do array.
// Essa função de callback recebe dois parâmetros:
// total: o acumulador, que guarda o valor acumulado ao longo das iterações.
// item: o elemento atual do array que está sendo processad
const total = carrinho.reduce((total, item) => {
    return total + item.preco;
}, 0);

console.log(total);

