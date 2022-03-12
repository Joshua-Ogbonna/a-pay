import React from "react";
import DashboardOutlets from "../../components/DashboardComponents/DashboardOutlets";
import Sidebar from "../../components/DashboardComponents/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard__component">
      <div className="sidebar__component">
        <Sidebar />
      </div>
      <div className="outlet__components">
        <DashboardOutlets />
      </div>
    </div>
  );
};

export default Dashboard;
