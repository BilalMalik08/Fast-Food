import "./foodMenu.css";
import React from "react";
import { useLocation } from "react-router-dom";
import AdminSideBar2 from "./AdminSideBar2";
import AdminHotDrinkMenu from "./AdminHotDrinkMenu";
import Footer from "./Footer";

function HotDrinkMenuContainer() {
  const location = useLocation();
  const isHotDrinkMenuPage = location.pathname === "/admin/menu/hotdrinks";
  const adminRow3Class = isHotDrinkMenuPage ? "admin-row3-white" : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10">
          <AdminHotDrinkMenu />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default HotDrinkMenuContainer;
