//global - podemos acessar a variável em qualquer lugar do código
let idade = 45;

//local - só podemos acessar a variável dentro do bloco onde ela foi declarada
function mostrarIdade() {
  let nome = "Joao"; // variável local, só existe dentro da função
  console.log(nome);
  console.log(idade);

  //bloco - só podemos acessar a variável dentro do bloco onde ela foi declarada
  if (idade > 18) {
    let podeDIrigir = true;
    console.log(podeDIrigir);
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
}

mostrarIdade();
