import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar/index";

const MainLayout = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 5fr",
      }}
    >
      <Sidebar />
      <div
        style={{
          margin: "10vh 0 0 0 ",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
