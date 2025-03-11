import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import "../../App.css";

const Dashboard = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Welcome:{username}</h3>
      <nav>
        <NavLink to="profile" activeClassName="active">
          profile
        </NavLink>
        <NavLink to="setting" activeClassName="active">
          setting
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
