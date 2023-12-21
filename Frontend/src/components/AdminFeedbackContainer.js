// AdminFeedbackContainer.js
import React from "react";
import { useLocation } from "react-router-dom";
import "./admin.css";
import AdminSideBar2 from "./AdminSideBar2";
import AdminFeedback from "./AdminFeedback";
import Footer from "./Footer";

function AdminFeedbackContainer() {
  const location = useLocation();
  const isAdminFeedbacksPage = location.pathname === "/admin/feedbacks";
  const adminRow3Class = isAdminFeedbacksPage
    ? "admin-row3-white"
    : "admin-row3";

  return (
    <>
      <div className="row admin-row1">
        <div className="col col-md-2">
          <AdminSideBar2 />
        </div>
        <div className="col col-md-10 admin-feedback-col">
          <AdminFeedback />
        </div>
      </div>
      <div className={`row ${adminRow3Class}`}>
        <Footer />
      </div>
    </>
  );
}

export default AdminFeedbackContainer;
