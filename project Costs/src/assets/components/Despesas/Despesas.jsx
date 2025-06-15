
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { categoria: "Alimentos", valor: 250 },
  { categoria: "Transporte", valor: 100 },
  { categoria: "Moradia", valor: 1500 },
  { categoria: "Lazer", valor: 50 },
  { categoria: "Outros", valor: 200 },
];

export const Despesas = () => {
  return (
    <section className="p-8">
      
      <h2 className="font-bold text-[22px] leading-[28px] text-[#121417] mb-1 font-manrope">
        Despesas por categoria
      </h2>
      <p className="text-[#121417] font-medium text-base leading-[24px] font-poppins">
        Despesas
      </p>
      <p className="text-[#121417] font-bold text-[32px] leading-[40px] mb-2">
        R$ 3.500,00
      </p>
      <p className="text-sm text-green-600 mb-4 font-manrope">
        Este mês <span className="font-bold">+2%</span>
      </p>

      
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis
              dataKey="categoria"
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "rgba(59, 130, 246, 0.1)" }}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                fontSize: "14px",
                color: "#111827",
              }}
              formatter={(value) => [`R$ ${value},00`, "Despesas"]}
            />
            <Bar
              dataKey="valor"
              fill="#3B82F6"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};
