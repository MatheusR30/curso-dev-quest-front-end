/*
📝 Instruções do Exercício
Crie um array chamado `numeros` com os valores de 1 a 5. 
Em seguida, percorra esse array usando um loop `for` e exiba
 cada número no console. Depois, use o método `forEach` para
  percorrer novamente o array e exibir os números no console
*/

const numeros = [1, 2, 3, 4, 5];

// o FOR esta perccorrendo o array 5 vezes, e cada uma delas esta exibindo o valor de cada iteração
for (let i = 0; i < 5; i++) {
  console.log(numeros[i]);
}

// o FOREACH esta perccorrendo o array(numeros) 5 vezes, e esta guardando o valor de cada iteração na
// variavel numero, e exibindo o valor de cada iteração
numeros.forEach((numero) => {
  console.log(numero);
});
