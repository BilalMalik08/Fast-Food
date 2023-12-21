import "./foodMenu.css";
import React from "react";
import { useLocation } from "react-router-dom";
import AdminSideBar2 from "./AdminSideBar2";
import AdminColdDrinkMenu from "./AdminColdDrinkMenu";
import Footer from "./Footer";

function ColdDrinkMenuContainer() {
  const location = useLocation();
  const isColdDrinkMenuPage =
    location.pathname === "/admin/adminmenu/colddrinks";
  const adminRow3Class = isColdDrinkMenuPage
    ? "admin-row3-white"
    : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10">
          <AdminColdDrinkMenu />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default ColdDrinkMenuContainer;
