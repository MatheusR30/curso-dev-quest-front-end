/*
ste exercício, você vai praticar o uso de **interfaces** e **propriedades opcionais** em **TypeScript**, além de definir valores **default** para parâmetros opcionais. O desafio consiste em criar uma função que receba um objeto `user` e exiba suas propriedades no console, considerando que apenas a propriedade `genero` é opcional, assumindo `"masculino"` como padrão quando não fornecida.

`AVISO`: tente fazer sozinho primeiro, caso sinta necessidade pode consultar a resolução do exercício.

### **Objetivos do exercício**

- Criar uma **interface** `User` com as propriedades:
    - `nome: string`
    - `idade: number`
    - `genero?: string` (opcional)
- Criar uma função que receba um objeto `user` com essa interface.
- Definir `"masculino"` como valor padrão para `genero`, caso não seja informado.
- Exibir os valores no console. */

interface IUser {
  nome: string;
  idade: number;
  genero?: string;
}

function printUser({ nome, idade, genero = "masculino" }: IUser) {
  console.log("Nome: ", nome);
  console.log("Idade: ", idade);
  console.log("Gênero: ", genero);
}

printUser({ nome: "Laura", idade: 25, genero: "feminino" });
printUser({ nome: "Lucas", idade: 30 });
