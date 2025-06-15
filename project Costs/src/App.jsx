import "./App.css";
import { Despesas } from "./assets/components/Despesas/Despesas";
import { Home } from "./assets/components/Home/Home";
import Navbar from "./assets/components/NavBar";
import { Transacoes } from "./assets/components/Transacoes/Transacoes";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Despesas />
      <Transacoes />
    </div>
  );
}

export default App;
