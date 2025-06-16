import React, { useState } from "react";
import Navbar from "../NavBar/NavBar";

export const AdicionarRenda = () => {
  const [expense, setExpense] = useState({
    
    quantia: "",
    data: "",
    descricao: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expense);
  };

  return (
    <section className="">
        <Navbar/>
        <div className="max-w-xl mx-auto pt-40">
      <h2 className="text-[28px] font-bold mb-6  text-center font-manrope leading-[35px] text-[#121417]">Adicionar renda</h2>
      <form onSubmit={handleSubmit} className="space-y-4 flex justify-center items-center flex-col">
        <input
          type="number"
          name="Quantia"
          placeholder="Quantia"
          onChange={handleChange}
          className="w-[480px] h-[56px]  border border-gray-300 rounded-lg bg-[#F0F2F5] p-4"
        />
        <input
          type="text"
          name="Descrição"
          placeholder="Descrição"
          onChange={handleChange}
          className="w-[480px] h-[56px] p-4 border border-gray-300 rounded-lg  bg-[#F0F2F5]"
        />
        <input
          type="date"
          name="data"
          value={expense.data}
          onChange={handleChange}
          className="w-[480px] h-[56px]  p-4 border border-gray-300 rounded-lg bg-[#F0F2F5]"
        />
        <button
          type="submit"
          className="w-[480px] h-[40px] bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition text-center"
        >
          Salvar
        </button>
      </form>
      </div>
    </section>
  );
}