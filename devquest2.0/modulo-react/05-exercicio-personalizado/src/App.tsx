// # Contador com Limite Personalizado

// O usuário pode

// - Definir um valor inicial via input
// - Definir um valor máximo via input
// - Aumentar/diminuir o valor com botões `-` e `+`
// - Exibir uma mensagem quando o valor máximo for atingido
//     - Conceitos aplicados
//         - `useState`
//         - Eventos (`onClick`, `onChange`)
//  Com o CHAT AJUDANDO

import { useState } from "react";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [initialValue, setInitialValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [message, setMessage] = useState("");

  const increment = () => {
    setCount((prev) => {
      if (prev >= maxValue) {
        setMessage("Valor máximoo atingido!");
        return prev;
      }
      0;
      return prev + 1;
    });
  };

  const decrement = () => {
    // setCount((prev) => prev - 1);
    setCount((prev) => {
      if (prev <= 0) {
        setMessage("Menor valor atingido!");
        return 0;
      }

      setMessage("");
      return prev - 1;
    });
  };

  const applyInitialValue = () => {
    setCount(initialValue);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Digite o valor inicial"
        onChange={(event) => {
          setInitialValue(Number(event.target.value));
        }}
      />

      <input
        type="number"
        placeholder="Digite o valor maximo"
        onChange={(event) => {
          setMaxValue(Number(event.target.value));
        }}
      />

      <button onClick={applyInitialValue}>Definir valor inicial</button>

      <p>Contador: {count}</p>
      <button onClick={increment}> + </button>

      <button onClick={decrement}> - </button>
    </>
  );
}
export default App;
