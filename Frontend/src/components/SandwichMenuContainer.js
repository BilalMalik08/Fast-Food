import "./foodMenu.css";
import React from "react";
import { useLocation } from "react-router-dom";
import AdminSideBar2 from "./AdminSideBar2";
import AdminSandwichMenu from "./AdminSandwichMenu";
import Footer from "./Footer";

function SandwichMenuContainer() {
  const location = useLocation();
  const isSandwichMenuPage = location.pathname === "/admin/menu/sandwiches";
  const adminRow3Class = isSandwichMenuPage ? "admin-row3-white" : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10">
          <AdminSandwichMenu />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default SandwichMenuContainer;
