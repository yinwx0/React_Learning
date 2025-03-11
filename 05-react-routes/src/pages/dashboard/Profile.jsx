import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "../../App.css";

const Profile = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "200px", marginRight: "20px" }}>
        <h2>Profile Page</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <NavLink
            to="fans"
            activeClassName="active"
            style={{
              display: "block",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            Fans
          </NavLink>
          <NavLink
            to="follow"
            activeClassName="active"
            style={{
              display: "block",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            Follow
          </NavLink>
        </nav>
      </div>
      <div style={{ flex: 1, padding: "20px", textAlign: "center" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
