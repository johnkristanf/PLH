import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales"],
  ["Jan", 1000],
  ["Feb", 1170],
  ["Mar", 660],
  ["Apr", 1030],
  ["May", 1030],
  ["Jun", 1030],
  ["Jul", 1030],
  ["Aug", 1030],
  ["Sep", 1030],
  ["Oct", 1030],
  ["Nov", 1030],
  ["Dec", 1030],
];

export const options = {
  title: "Panabo Lodging House Monthly Sales Metrics",
  curveType: "function",
  legend: { position: "bottom" },
};

export function MonthlySalesChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export function YealySalesChart() {
    return (
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    );
  }