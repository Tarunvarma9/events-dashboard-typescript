import React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
  SeriesClickEvent,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartArea,
} from "@progress/kendo-react-charts";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import BuSpend from "./BuSpend";
// import DummyGrid from "../DummyGrid";
import DataGrid from "../../../details/data grid/DataGrid";

const categories = [];
const series = [
  {
    name: "May",
    data: 360000000,
  },
  {
    name: "Apr",
    data: 110000000,
  },
  {
    name: "Mar",
    data: 100000000,
  },
  {
    name: "Feb",
    data: 25000000,
  },
  {
    name: "Jan",
    data: 15000000,
  },
  {
    name: "Dec",
    data: 10000000,
  },
];

function BarChart() {
  const [visible, setVisible] = React.useState<boolean>(true);
  const [popupCatagory, setPopupCategory] = React.useState<string>("");
  const [popupDataItem, setPopupDataItem] = React.useState<string>("");

  const popupView = (event: SeriesClickEvent) => {
    setPopupCategory(event.category);
    setPopupDataItem(event.dataItem);
    setVisible(!visible);
  };

  const toggleDialog = () => {
    setVisible(!visible);
  };
  const legend = { position:'bottom', orientation:"horizontal", labels: { font: '0.95em Roboto, Arial, sans-serif'}};
  return (
    <>
      <div className="col-4">
        <div className="k-card" style={{background:'#fff'}}>
          <Chart
            style={{ height: "250px", }}
            onSeriesClick={(event: SeriesClickEvent) => popupView(event)}
            pannable={true}
            zoomable={true}
          >
            <ChartArea background="#fff" margin={30} />
            <ChartTitle  text="BU Spend" font='1.06em Roboto, Arial, sans-serif' color='#000'/>
            <ChartLegend {...legend} />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem />
            </ChartCategoryAxis>
            <ChartSeries>
              <ChartSeriesItem
                data={series}
                type="column"
                tooltip={{ visible: true }}
                field={"data"}
                categoryField={"name"}
              />
            </ChartSeries>
          </Chart>
        </div>
      </div>
      {visible ? null : (
        <Dialog onClose={toggleDialog}>
          {/* <h1>{popupCatagory}</h1>
          <p>{popupDataItem}</p> */}
          <DataGrid/>
          <DialogActionsBar>
            <button
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              onClick={toggleDialog}
            >
              Close
            </button>
          </DialogActionsBar>
        </Dialog>
      )}
    </>
  );
}

export default BarChart;