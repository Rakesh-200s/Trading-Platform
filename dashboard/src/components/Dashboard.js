import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Fund from "./Funds";
import Holding from "./Holdings";

import Order from "./Orders";
import Position from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/holdings" element={<Holding />} />
          <Route path="/positions" element={<Position/>} />
          <Route path="/funds" element={<Fund/>} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;