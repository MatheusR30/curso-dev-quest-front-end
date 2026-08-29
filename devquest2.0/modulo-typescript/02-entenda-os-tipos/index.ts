function sendMessage(userName: string, isLogged: boolean) {
  console.log(`Olá ${userName}. Você ${!isLogged ? " não" : ""} pode logar.`);
}

const userName = "Beto";
const isLogged = true;

sendMessage(userName, isLogged);

// Tipagem aula 1
// Criação de variaveis com tipos
const nome: string = "Matheus";
let age: number = 123;
let mandouEmail: boolean = true;

// Tipagem aula 2
// Array/vetor
let idades: number[] = [12, 22, 39];

//a anotação de tipo do parâmetro em um tipo de objeto
function imprimirCoodenadas(pt: { x: number; y: number }) {
  console.log("the coordinate's x value is" + pt.x);
  console.log("the coordinate's y value is" + pt.y);
}

imprimirCoodenadas({ x: 3, y: 7 });

let obj: { x: number; y: number } = { x: 3, y: 7 };
