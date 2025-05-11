import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  LabelList,
  Brush,
} from "recharts";

type ChartType = "pie" | "donut" | "bar" | "line";

type Series = {
  key: string;
  name: string;
  color?: string;
};

type ChartAtom = {
  type: ChartType;
  data: any[];
  series: Series[];
  nameKey?: string;
  height?: number;
};

const fallbackColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff6f91", "#00C49F"];

export const ChartAtom: React.FC<ChartAtom> = ({
  type,
  data,
  series,
  nameKey = "name",
  height = 300,
}) => {
  const colors = fallbackColors;

  const isPieType = type === "pie" || type === "donut";
  const isSingleSeries = series.length === 1;

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        {isPieType && isSingleSeries ? (
          <PieChart>
            <Pie
              data={data}
              dataKey={series[0].key}
              nameKey={nameKey}
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={type === "donut" ? 40 : 0}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        ) : type === "bar" ? (
          <BarChart data={data}>
            <XAxis dataKey={nameKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {series.map((s, i) => (
              <Bar key={s.key} dataKey={s.key} name={s.name} fill={s.color || colors[i % colors.length]} />
            ))}
          </BarChart>
        ) : (
          <LineChart data={data}>
            <XAxis dataKey={nameKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {series.map((s, i) => (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.name}
                stroke={s.color || colors[i % colors.length]}
                strokeWidth={2}
              >
                <LabelList dataKey={s.key} position="top" />
              </Line>
            ))}
             <Brush dataKey="mes" height={5} stroke="#8884d8" />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};
