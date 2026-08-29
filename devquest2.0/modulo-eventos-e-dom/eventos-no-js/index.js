const input = document.getElementById("nome");
const button = document.getElementById("btn");
const formBusca = document.getElementById("form-busca");

// console.log(input);
// console.log(button);

//O código está adicionando um "ouvinte de evento" ao botão (button).
//Quando o botão é clicado, a função dentro do addEventListener é executada,
//e a mensagem "clicou" é exibida no console.
button.addEventListener("click", () => {
  console.log("clicou");
});

//O evento input é disparado sempre que o valor de um campo de
// entrada (<input>) muda. Isso inclui digitar, apagar ou colar texto,
//o valor atual do campo é capturado e armazenado na variável value.
input.addEventListener("input", () => {
  //   console.log("digitou");

  const value = input.value;
  //   console.log(value);
});

//O evento submit é disparado quando um formulário é enviado
//O código adiciona um ouvinte ao formulário (formBusca). Quando o formulário é enviado:
//O método event.preventDefault() impede o comportamento padrão do navegador (recarregar a página).
//O valor do campo de entrada (input.value) é exibido no console.
formBusca.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(input.value);
});
