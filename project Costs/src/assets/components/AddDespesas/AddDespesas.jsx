import React, { useState } from "react";

export default function AddDespesas() {
  const [expense, setExpense] = useState({
    nome: "",
    valor: "",
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
      <h2 className="text-[28px] font-bold mb-6  text-center font-manrope leading-[35px] text-[#121417]">Adicionar despesa</h2>
      <form onSubmit={handleSubmit} className="space-y-4 flex justify-center items-center flex-col">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={expense.nome}
          onChange={handleChange}
          className="w-[480px] h-[56px]  border border-gray-300 rounded-lg bg-[#F0F2F5] p-4"
        />
        <input
          type="number"
          name="valor"
          placeholder="Valor"
          value={expense.valor}
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
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={expense.descricao}
          onChange={handleChange}
          className="w-[480px] h-[144px] p-4 border border-gray-300 rounded-lg  bg-[#F0F2F5]"
        />
        <button
          type="submit"
          className="w-[480px] h-[40px] bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition text-center"
        >
          Salvar
        </button>
      </form>
    </section>
  );
}
