import type { ChangeEvent, FormEvent, KeyboardEvent } from "react";
import "./App.css";

function App() {
  const handleClick = (name: string) => {
    alert(`${name} Clicou no botão`);
  };

  // o event seria a ação, e o KEYBOARD o tipo, e o html para especificar mais ainda
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log("a tecla pressionada foi:", event.key);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //previnir o evendo do padrao do formulario
    event.preventDefault();
    alert("o formulário foi enviado");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <>
      <button onClick={() => handleClick("Matheus")}>Click neste botão</button>

      <input type="text" onKeyDown={handleKeyPress} />

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite algo" onChange={handleChange} />

        <button typeof="submit">Enviar</button>
      </form>
    </>
  );
}

export default App;
