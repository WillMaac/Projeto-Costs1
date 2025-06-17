import "./App.css";
import { AddDespesas } from "./assets/components/AddDespesas/AddDespesas";
import { AdicionarRenda } from "./assets/components/Adicionar renda/Adicionar renda";

import { Despesas } from "./assets/components/Despesas/Despesas";
import { Home } from "./assets/components/Home/Home";
import Navbar from "./assets/components/NavBar/NavBar";
import { Sidebar } from "./assets/components/Sidebar/Sidebar";

import { Transacoes } from "./assets/components/Transacoes/Transacoes";

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Despesas />
      <Transacoes />
      <AddDespesas/>
      <AdicionarRenda/>
      <Sidebar/>
    </div>
  );
}

export default App;
