import * as React from "react";
import * as ReactDOM from "react-dom";

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartTitle,
  ChartLegendTitle,
  ChartLegendItem
} from "@progress/kendo-react-charts";

import "hammerjs";

const pieData = [
  { category: "STEEL", value: 26 },
  { category: "FLOORING MATERIAL", value: 25 },
  { category: "CEMENT", value: 20 },
  { category: "HARDWARE MATERIAL", value: 13 },
  { category: "ELECTRICAL MATERIAL", value: 9 },
  { category: "METAL", value: 7 },
];
function PieChart() {
  const labelContent = (e:any) => e.category;
  const legend = { position:'right', labels: { font: '0.95em Roboto, Arial, sans-serif'}};

  return (
    <div className="col-4">
      <div className="k-card" style={{background:'#fff'}}>
        <Chart style={{ height: "250px" }}>
          <ChartTitle text="Category Spent & Savings" font='1.06em Roboto, Arial, sans-serif' />
          <ChartLegend  {...legend} />
          <ChartSeries>
            <ChartSeriesItem
              type="pie"
              data={pieData}
              field="value"
              categoryField="category"
              tooltip={{ visible: true }}
             
            />
             
            
          </ChartSeries>
        </Chart>
      </div>
    </div>
  );
}

export default PieChart;
