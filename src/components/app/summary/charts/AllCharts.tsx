import * as React from "react";
import * as ReactDOM from "react-dom";
// import jwt_decode from "jwt-decode";
// import { isExpired, decodeToken } from "react-jwt";

import PieChart from "./all-charts/PieChart";
import BarChart from "./all-charts/BarChart";
import BuSpend from "./all-charts/BuSpend";
import PoSummary from "./all-charts/PoSummary";
import "./style.css";

const AllCharts = () => {
  return (
    <>
      <div className="row mb-3">
        <PieChart />
        <PoSummary />
        <BarChart />
      </div>
    </>
  );
};

export default AllCharts;
