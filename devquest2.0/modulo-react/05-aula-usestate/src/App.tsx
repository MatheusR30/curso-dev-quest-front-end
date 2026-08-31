// import { useState } from "react";
import "./App.css";

import MyInput from "./components/Myinput";

function App() {
  // criando o estado COUNT, e setando ele como (0)
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   // usamos prev porque significa "previous" (anterior)
  //   setCount((prev) => prev + 1);
  // };

  // const decrement = () => {
  //   setCount((prev) => (prev > 0 ? prev - 1 : 0));
  // };

  // const resetCounter = () => {
  //   setCount(0);
  // };

  // Se prev MENO
  // setCount((prev) => (prev <= 0 ? 0 : prev));

  return (
    <>
      {/* <p>contador: {count}</p>
      <button onClick={increment}>Incrementar Contador</button>
      <button onClick={decrement}>Decrementar Contador</button>
      <button onClick={resetCounter}>Resetar Contador</button> */}
      <MyInput></MyInput>
    </>
  );
}

export default App;
