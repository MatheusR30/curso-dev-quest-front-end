import { useState, type ChangeEvent } from "react";
import "./App.css";

const App = () => {
  const [valor, setValor] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValor(e.target.value);
  };

  const handleClick = () => {
    setResultado(valor);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite algo..."
        value={valor}
        onChange={handleChange}
      />

      <button onClick={handleClick}>Enviar</button>

      {resultado && <p>Voce digitou: {resultado}</p>}
    </div>
  );
};

<section id="spacer"></section>;
export default App;
