import "./foodMenu.css";
import React from "react";
import { useLocation } from "react-router-dom";
import AdminSideBar2 from "./AdminSideBar2";
import AdminIceCreamMenu from "./AdminIceCreamMenu";
import Footer from "./Footer";

function IceCreamMenuContainer() {
  const location = useLocation();
  const isIceCreamMenuPage = location.pathname === "/admin/adminmenu/icecreams";
  const adminRow3Class = isIceCreamMenuPage ? "admin-row3-white" : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10">
          <AdminIceCreamMenu />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default IceCreamMenuContainer;
