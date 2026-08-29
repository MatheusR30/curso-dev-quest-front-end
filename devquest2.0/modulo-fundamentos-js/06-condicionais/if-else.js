// As condicionais são estruturas de controle de fluxo do nosso código

// Se for isso, então faca aquilo
// Caso não seja isso, faça outra coisa

// const filme = "Mario";

// if (filme === "Homem Aranha") {
//   console.log("Caiu no if do Homem Aranha");
// } else if (filme === "Batman") {
//   console.log("Caiu no if do Batman");
// } else if (filme === "Mulher Maravilha") {
//   console.log("Caiu no if da Mulher Maravilha");
// } else {
//   console.log("Caiu no else");
// }

const idade = 17;
const cidade = "São Paulo";

if (idade >= 18 && cidade === "São Paulo") {
  console.log("Pode entrar na festa");
} else {
  console.log("Não pode entrar na festa");
}

// operador ternario
// // condiao ? valor para verdadeiro : valor para falso

// idade >= 18
//   ? console.log("Pode entrar na festa")
//   : console.log("Não pode entrar na festa");

const podeEntrarNaFesta =
  idade >= 18 ? "Pode entrar na festa" : "Não pode entrar na festa";

console.log(podeEntrarNaFesta);
