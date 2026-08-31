import "./App.css";
import { Card } from "./componentes/Card";

function App() {
  return (
    <div>
      <h1>Meus Cards</h1>
      <Card titulo="Primeiro Card" descricao="Esse é o primeiro card" />
      <Card titulo="Segundo Card" descricao="Esse é o segundo card" />
    </div>
  );
}

export default App;
