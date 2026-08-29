// mexendo com classes nos elementos HTML usando classList

const quadrado = document.querySelector(".quadrado");

console.log(quadrado);

// propriedade CLASSLIST que nos da uma lista de classes que esse console tem
console.log(quadrado.classList);
//Para remover uma classe, somente o nome sem a notacao "."
//Ja que ja estamonos em uma contexto de classe
// quadrado.classList.remove("azul");

// //Adiona uma classe ja existente no index.html
// quadrado.classList.add("preto");

//Verifica se nao tem, e adiciona na primeira vez, se na segunda
//ele ver que já tem, ele remove.
// quadrado.classList.toggle("preto");
// quadrado.classList.toggle("preto");

// método contains no JavaScript é usado para verificar se uma classe específica está presente em um elemento HTML. Ele é um método do objeto classList, que é uma propriedade dos elementos DOM.
const hasBlue = quadrado.classList.contains("azul");

console.log(hasBlue);

if (hasBlue) {
  console.log("quadrado tem a classe azul");
} else {
  console.log("quadrado NÃO tem a classe azul");
}

// Mexendo com atributos dos elementos no HTML

// setAttribute - define um atributo
// getAttribute - obtem o valor de um atributo
// removeAtribute - remove um atributo

// Estou pegando um Elemento do HTML e colocando dentro do INPUTCOR
const inputCor = document.getElementById("cor");

//com o INPUTCOR, consigo usar os metodos do DOCUMENT,
//usando o setAttribute, estou adicionando placeHolder ao um elemento html.
inputCor.setAttribute("placeholder", "Digite uma cor");

//usando o GetAttibyte, passando o nome do Atributo que desejo pegar
const valorPlaceholder = inputCor.getAttribute("placeholder");

//Aqui, imprimindo a variavel e o que ela faz no CONSOLE
// console.log(valorPlaceholder);

inputCor.removeAttribute("placeholder");
