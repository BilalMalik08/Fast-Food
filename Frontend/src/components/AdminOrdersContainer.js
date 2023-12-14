// AdminOrdersContainer.js
import React from "react";
import { useLocation } from "react-router-dom";
import "./admin.css";
import AdminSideBar2 from "./AdminSideBar2";
import AdminOrders from "./AdminOrders";
import Footer from "./Footer";

function AdminOrdersContainer() {
  const location = useLocation();
  const isAdminOrdersPage = location.pathname === "/orders";
  const adminRow3Class = isAdminOrdersPage ? "admin-row3-white" : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10">
          <AdminOrders />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default AdminOrdersContainer;
