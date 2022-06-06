import * as React from 'react'
import * as ReactDOM from 'react-dom'


import {
    Chart,
    ChartLegend,
    ChartLegendTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

import 'hammerjs';
interface dataItem  {
    name: string,
    data: number[]
}

const series: dataItem[] = [{
    name: 'India',
    data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
  }, {
    name: 'Russian Federation',
    data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
  }, {
    name: 'Germany',
    data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
  }];

const categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
const legend = { position:'bottom', labels: { font: '0.95em Roboto, Arial, sans-serif'}};

const LineChart = () => (
    <div style={{width: "700px", height:"400px"}}>
  <Chart>
    <ChartTitle text="Gross domestic product growth /GDP annual %/" font='1.06em Roboto, Arial, sans-serif' color="#000000"/>
    <ChartLegend {...legend}>
      <ChartLegendTitle text="Countries" font="18px Arial" />
    </ChartLegend>
    <ChartSeries>
      {series.map(s => <ChartSeriesItem name={s.name} data={s.data} type="line" key={s.name} />)}
    </ChartSeries>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={categories} />
    </ChartCategoryAxis>
  </Chart>
  </div>
);

export default LineChart