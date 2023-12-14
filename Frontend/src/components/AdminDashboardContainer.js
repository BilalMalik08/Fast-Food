import React from "react";
import { useLocation } from "react-router-dom";
import "./admin.css";
import AdminSideBar2 from "./AdminSideBar2";
import AdminDashboard2 from "./AdminDashboard2";
import Footer from "./Footer";

function AdminDashboardContainer() {
  const location = useLocation();
  const isAdminDashboardPage = location.pathname === "/dashboard";
  const adminRow3Class = isAdminDashboardPage
    ? "admin-row3-white"
    : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10">
          <AdminDashboard2 />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default AdminDashboardContainer;
