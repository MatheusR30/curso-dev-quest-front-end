// Crie um componente chamado **Formulario** que tenha um **input** de texto e um **botão**.

// Quando o usuário digitar algo no input e clicar no botão, o valor digitado deve ser exibido na tela logo abaixo do formulário.

// 👉 O objetivo é entender como controlar o valor de um input com `useState` e como usar o evento `onChange`.

import { useState, type ChangeEvent } from "react";
import "./App.css";

function App() {
  const [digitado, setDigitado] = useState("");
  const [exibido, setExibido] = useState("");

  const aoDigitar = (event: ChangeEvent<HTMLInputElement>) => {
    setDigitado(event.target.value);
  };

  const aoClicar = () => {
    setExibido(digitado);
    event?.preventDefault();
  };

  return (
    <>
      <form action="">
        <input type="text" value={digitado} onChange={aoDigitar} />

        <button onClick={aoClicar}>Enviar</button>
        <p>{exibido}</p>
      </form>
    </>
  );
}
export default App;
