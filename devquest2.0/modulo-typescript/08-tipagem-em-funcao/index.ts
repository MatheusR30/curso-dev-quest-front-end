// Recebe um string / Não retorna nada / Apenas executa uma ação (imprime no console)
function greet(name: string) {
  console.log(`Olá, ${name}!`);
}

greet("Matheus");

// Recebe um number / Retorna um number / Pode ser reutilizada em outras partes do código
function doubleNumber(number: number): number {
  return number * 2;
}

const resultado = doubleNumber(3);
console.log(resultado);
