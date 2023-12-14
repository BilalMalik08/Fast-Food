import React from "react";
import { useLocation } from "react-router-dom";
import "./admin.css";
import AdminSideBar2 from "./AdminSideBar2";
import AdminCustomers from "./AdminCustomers";
import Footer from "./Footer";

function AdminCustomersContainer() {
  const location = useLocation();
  const isAdminCustomersPage = location.pathname === "/customers";
  const adminRow3Class = isAdminCustomersPage
    ? "admin-row3-white"
    : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10">
          <AdminCustomers />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default AdminCustomersContainer;
