import { useState } from "react";

const MyInput = () => {
  //👉 Tecnicamente, isso é uma função JavaScript
  //👉 Mas no contexto do React, ela é chamada de:
  //✅ Componente funcional (Functional Component)

  const [text, setText] = useState("");

  return (
    <>
      {/* O ONCHANGE para pegar o valor digitado */}
      <input
        type="text"
        placeholder="Digite algo..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <p>Você digitou: {text}</p>
      <button onClick={() => setText("")}> Limpar</button>
    </>
  );
};

export default MyInput;
