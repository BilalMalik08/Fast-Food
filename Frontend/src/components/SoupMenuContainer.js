import "./foodMenu.css";
import React from "react";
import { useLocation } from "react-router-dom";
import AdminSideBar2 from "./AdminSideBar2";
import AdminSoupMenu from "./AdminSoupMenu";
import Footer from "./Footer";

function SoupMenuContainer() {
  const location = useLocation();
  const isSoupMenuPage = location.pathname === "/admin/menu/soups";
  const adminRow3Class = isSoupMenuPage ? "admin-row3-white" : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10">
          <AdminSoupMenu />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default SoupMenuContainer;
