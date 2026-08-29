/*
📝 Instruções do Exercício
Crie um array chamado `numeros` contendo os valores [10, 20, 30, 40]. 
Depois, use o método `reduce()` para somar todos os valores do array e 
armazene o resultado em uma variável chamada `soma`. Exiba o valor da 
soma no console.
*/

const numeros = [10, 20, 30, 40];

/*
A cada iteração:
O acumulador começa com o valor inicial 0.
O valorAtual é o elemento atual do array sendo 
processado. A soma do acumulador e do valorAtual 
é retornada e usada como o novo valor do acumulador
na próxima iteração.
"mesmo coisa que o FOREACH, só que o REDUCE tem um acumulador, 
ou seja, ele vai acumulando o resultado a cada iteração,
 enquanto o FOREACH apenas executa uma função para cada elemento
 do array sem acumular resultados."
*/
const soma = numeros.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual,
  0,
);

console.log(soma);
