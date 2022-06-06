import * as React from "react";
import AllCharts from "./charts/AllCharts";
import { DropDownButton } from "@progress/kendo-react-buttons";
import { DropDownList } from '@progress/kendo-react-dropdowns';


const SummaryPage = () => {

  const dropdown = [ "This Day", "This week", "This Month" ];
  // const settings: any[] = [
  //   {
  //     text: "This Day",
  //   },
  //   {
  //     text: "This Week",
  //   },
  //   {
  //     text: "This Month",
  //   },
  // ];
  return (
    <div>
      <h5>Summary data </h5>
      <div>
        {/* <DropDownButton
          className="buttons-container-button"
          fillMode="flat"
          items={settings}
          icon="cog"
          text="Drop-down"
        /> */}
        <DropDownList style={{ width: '300px' }}  data={dropdown} />
      </div>
      <br />
      <div>
        <AllCharts />
      </div>
    </div>
  );
};
export default SummaryPage;
