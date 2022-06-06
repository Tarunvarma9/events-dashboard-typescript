import * as React from "react";
import * as ReactDOM from "react-dom";

import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
} from "@progress/kendo-react-charts";

const data = [360000000, 110000000, 200000000, 125000000, 215000000, 310000000];
const categories = ["VRePL ", "Woxen", "WTC", "Karka", "Chaitanya", "BEEN"];
const legend = { position:'bottom', orientation:"horizontal", labels: { font: '0.95em Roboto, Arial, sans-serif'}};

const BuSpend = () => (
  <div className="col-4">
    <div className="k-card" style={{}}>
      <Chart style={{ height: "250px" }}>
        <ChartTitle text="BU Spend" font='1.06em Roboto, Arial, sans-serif' color="#000" />
        <ChartLegend {...legend} />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories} startAngle={45}  labels={{ rotation: -45}}/>
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem data={data} name="BU Spend" />
        </ChartSeries>
      </Chart>
    </div>
  </div>
);

export default BuSpend;
