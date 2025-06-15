export const Home = () => {
  return (
    <section className="p-8">
      <h1 className="text-[#121417] text-3xl font-bold leading-[40px] mb-3">
        Visão geral
      </h1>
      <p className="text-[#637887] text-sm font-medium leading-[21px] mb-7">
        Aqui etá um resumo de suas finanças
      </p>

      <h2 className="text-[#121417] leading-[28px] font-bold text-[22px] mb-4">
        Resumo financeiro
      </h2>

      <div className="flex flex-wrap gap-8 justify-center items-center">
        <div className="min-w-[250px] max-w-[300px] px-6 py-6 border rounded-lg border-[#DBE0E5]">
          <h3 className="text-base font-medium leading-[24px]">Saldo total</h3>
          <p className="font-bold text-2xl leading-[30px]">R$ 12.500,00</p>
          <span className="font-medium text-base leading-[24px] text-[#088738]">
            +10%
          </span>
        </div>
        <div className="min-w-[250px] max-w-[300px] px-6 py-6 border rounded-lg border-[#DBE0E5]">
          <h3 className="text-base font-medium leading-[24px]">Renda total</h3>
          <p className="font-bold text-2xl leading-[30px]">R$ 5.000,00</p>
          <span className="font-medium text-base leading-[24px] text-[#E83608]">
            -5%
          </span>
        </div>
        <div className="min-w-[250px] max-w-[300px] px-6 py-6 border rounded-lg border-[#DBE0E5]">
          <h3 className="text-base font-medium leading-[24px]">
            Despesas totais
          </h3>
          <p className="font-bold text-2xl leading-[30px]">R$ 3.500,00</p>
          <span className="font-medium text-base leading-[24px] text-[#088738]">
            +2%
          </span>
        </div>
      </div>
    </section>
  );
};
