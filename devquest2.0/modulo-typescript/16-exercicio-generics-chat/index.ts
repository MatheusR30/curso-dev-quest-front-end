/*
# **Exercício - Trabalhando com Generics em TypeScript**

Neste exercício, você vai praticar o uso de **Generics** em **TypeScript**, criando funções que funcionam com diferentes tipos de dados de forma segura e reutilizável. O desafio consiste em criar uma função genérica que receba um array de qualquer tipo e exiba cada item no console.

`AVISO`: tente fazer sozinho primeiro, caso sinta necessidade pode consultar a resolução do exercício.

### **Objetivos do exercício**

- Criar uma função genérica em TypeScript.
- Definir um tipo genérico `<T>` que permita trabalhar com diferentes tipos de dados.
- Iterar sobre os elementos de um array.
- Exibir os itens no console.
- Testar a função com arrays de números e strings.

### **Sugestões de implementação**

- Use `<T>` na assinatura da função para declarar o tipo genérico.
- Defina o parâmetro como `T[]`, garantindo que seja um array do tipo recebido.
- Utilize o método `forEach` para percorrer os itens.
- Faça duas chamadas de teste: uma com números e outra com strings.
*/
//              COM O CHAT

const numbers = [10, 20, 30, 40];
const nomes = ["matheus", "Luan", "Marcos", "Joao"];

//Criar uma função genérica em TypeScript / <T, U> → são tipos genéricos
function imprimirArrays<T, U>(primeiroArr: T[], segundoArr: U[]): void {
  //O forEach percorre o array arr1 / A cada volta ele te dá: / item → o valor atual do array /
  //  index → a posição (0, 1, 2...)
  primeiroArr.forEach((item, index) => {
    //usa o mesmo index
    //pega o valor correspondente do outro array
    const juncao = segundoArr[index];

    console.log(`O valor: ${item} e o nome: ${juncao}`);
  });
}

imprimirArrays(numbers, nomes);
