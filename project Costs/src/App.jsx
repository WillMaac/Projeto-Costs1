import "./App.css";
import { AddDespesas } from "./assets/components/AddDespesas/AddDespesas";
import { Despesas } from "./assets/components/Despesas/Despesas";
import { Home } from "./assets/components/Home/Home";
import Navbar from "./assets/components/NavBar/NavBar";

import { Transacoes } from "./assets/components/Transacoes/Transacoes";

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Despesas />
      <Transacoes />
      <AddDespesas/>
    </div>
  );
}

export default App;
