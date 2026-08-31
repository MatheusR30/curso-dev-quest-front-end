import "./App.css";
import { Cidade } from "./componentes/cidade";

function App() {
  return (
    <div>
      <h1>Minhas Cidades São</h1>
      <Cidade nome="São Paulo" populacao={8000000} />
      <Cidade nome="São Jose do Rio Preto" populacao={600000} />
    </div>
  );
}

export default App;
