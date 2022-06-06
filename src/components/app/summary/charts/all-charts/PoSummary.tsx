import * as React from "react";
import * as ReactDOM from "react-dom";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  SeriesClickEvent
} from "@progress/kendo-react-charts";
import LineChart from "./LinearChart";

const data = [20, 170, 245, 215, 195, 110];
const categories = ["May", "Apr", "Mar", "Feb", "Jan", "Dec"];

function PoSummary() {
  const [visible, setVisible] = React.useState<boolean>(true);

  const popupView = (event: SeriesClickEvent) => {
    setVisible(!visible);
  };

  const toggleDialog = () => {
    setVisible(!visible);
  };
  
  const legend = { position:"bottom" ,orientation:"horizontal", labels: { font: '0.95em Roboto, Arial, sans-serif'}};
  return(
    <>
  <div className="col-4">
    <div className="k-card">
      <Chart style={{ height: "250px" }} onSeriesClick={(event: SeriesClickEvent) => popupView(event)}>
        <ChartTitle text="Monthly PO Summary" font='1.06em Roboto, Arial, sans-serif' />
        <ChartLegend {...legend} />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories} startAngle={45} />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem data={data} name="PO Count" />
        </ChartSeries>
      </Chart>
    </div>
  </div>
  {visible ? null : (
        <Dialog onClose={toggleDialog}>
        <LineChart/>
          
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
)
  };

export default PoSummary;
