// type assertions - Uso o AS e o tipo, para dizer EXPLICITAMENTE qual o tipo do elemento.
const button = document.getElementById("button") as HTMLButtonElement;

button.addEventListener("click", (event) => {
  const mouseEvent = event as MouseEvent;
});
