import React from "react";
import { useLocation } from "react-router-dom";
import "./admin.css";
import AdminSideBar2 from "./AdminSideBar2";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";

function AdminMenuContainer() {
  const location = useLocation();
  const isAdminMenuPage = location.pathname === "/adminmenu";
  const adminRow3Class = isAdminMenuPage ? "admin-row3-white" : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10 admin-col-10">
          <AdminMenu />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default AdminMenuContainer;
