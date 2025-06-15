import React from "react";

const transacoes = [
  {
    data: "15/07/2024",
    descricao: "Supermercado",
    categoria: "Alimentos",
    valor: "-R$ 250,00",
  },
  {
    data: "14/07/2024",
    descricao: "Posto de gasolina",
    categoria: "Transporte",
    valor: "-R$ 100,00",
  },
  {
    data: "13/07/2024",
    descricao: "Aluguel",
    categoria: "Moradia",
    valor: "-R$ 1.500,00",
  },
  {
    data: "12/07/2024",
    descricao: "Cinema",
    categoria: "Lazer",
    valor: "-R$ 50,00",
  },
  {
    data: "11/07/2024",
    descricao: "Salário",
    categoria: "Renda",
    valor: "R$ 5.000,00",
  },
];

export const Transacoes = () => {
  return (
    <section className="p-8">
      <h2 className="font-bold text-[22px] leading-[28px] text-[#121417] mb-4">
        Transações recentes
      </h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200 min-w-[910px] max-w-[926px]  mx-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-4 text-left font-medium text-gray-500">
                Data
              </th>
              <th className="px-4 py-4 text-left font-medium text-gray-500">
                Descrição
              </th>
              <th className="px-4 py-4 text-left font-medium text-gray-500">
                Categoria
              </th>
              <th className="px-4 py-4 text-right font-medium text-gray-500">
                Valor
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {transacoes.map((transacao, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="px-5 py-5 text-gray-700">{transacao.data}</td>
                <td className="px-4 py-2 text-gray-700">
                  {transacao.descricao}
                </td>
                <td className="px-5 py-5">
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                    {transacao.categoria}
                  </span>
                </td>
                <td className="px-5 py-5 text-right text-gray-700">
                  {transacao.valor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
