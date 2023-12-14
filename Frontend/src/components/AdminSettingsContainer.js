import React from "react";
import "./admin.css";
import { useLocation } from "react-router-dom";
import AdminSideBar2 from "./AdminSideBar2";
import AdminSettings from "./AdminSettings";
import Footer from "./Footer";

function AdminSettingsContainer() {
  const location = useLocation();
  const isAdminSettingsPage = location.pathname === "/settings";
  const adminRow3Class = isAdminSettingsPage
    ? "admin-row3-white"
    : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10">
          <AdminSettings />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default AdminSettingsContainer;
