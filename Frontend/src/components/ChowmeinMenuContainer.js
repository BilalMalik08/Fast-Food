import "./foodMenu.css";
import React from "react";
import { useLocation } from "react-router-dom";
import AdminSideBar2 from "./AdminSideBar2";
import AdminChowmeinMenu from "./AdminChowmeinMenu";
import Footer from "./Footer";

function ChowmeinMenuContainer() {
  const location = useLocation();
  const isChowmeinMenuPage = location.pathname === "/admin/menu/chowmein";
  const adminRow3Class = isChowmeinMenuPage ? "admin-row3-white" : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10">
          <AdminChowmeinMenu />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default ChowmeinMenuContainer;
